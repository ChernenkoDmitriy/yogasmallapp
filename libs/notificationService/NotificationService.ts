import { FirebaseMessaging, IMessaging } from "./firebase";
import { notificationHandler } from "./pushNotification/NotificationHandler";
import { IRestPost, requester } from "../requester";
import { IResponse } from "../requester/IRequester/IResponse";
import { ILinks, links } from "../../src/utils/Links";
import { Utils } from "../../src/utils/Utils";
import { FirebaseMessagingTypes } from "@react-native-firebase/messaging";
import { EventDetail, EventType } from "@notifee/react-native";

class NotificationService {
    private static instance: NotificationService;

    _notificationHandler = notificationHandler;
    _messaging!: IMessaging;

    constructor(private requester: IRestPost, private links: ILinks,) {
        if (NotificationService.instance) {
            return NotificationService.instance;
        }
        this._messaging = new FirebaseMessaging();
        NotificationService.instance = this;
    }

    requestPermissions = async () => {
        const authorizationStatus = await this._notificationHandler.requestPermission();
        return authorizationStatus;
    };

    createChannels = async () => {
        if (!Utils.isIOS) {
            const channelId = await this._notificationHandler.createChannel();
            return channelId;
        } else {
            return null
        }
    };

    removeAllDeliveredNotifications = () => {
        this._notificationHandler.removeAllDeliveredNotifications();
    }

    register = async (userId?: number | string) => {
        const token = await this._messaging.getFCMToken();
        const response = await this.requester.post(this.links.REGISTER_FCM_TOKEN, { userId, token });
        const result = this.processingResponse(response);
        return result;
    }

    deleteToken = async () => {
        const token = await this._messaging.getFCMToken();
        await this._messaging.removeFCMToken();
        const response = await this.requester.post(this.links.DELETE_FCM_TOKEN, { token });
        const result = this.processingResponse(response);
        return result;
    }

    subscribeForeground = () => {
        const unsubscribe = this._messaging?.subscribeAppOnForegroundMessages(this.onReceiveNotification);
        const unsubscribeEvent = this._notificationHandler.subscribeAppOnForegroundEvents(this.onForegroundEvent);
        return () => {
            unsubscribe();
            unsubscribeEvent;
        }
    }

    subscribeBackground = () => {
        this._messaging?.subscribeAppOnBackgroundMessages(this.onReceiveNotification);
        this._notificationHandler.subscribeAppOnBackgroundEvents(this.onBackgroundEvent)
    }

    private onForegroundEvent = (type: EventType, detail: EventDetail) => {
        console.log(type)
        switch (type) {
            case EventType.PRESS:
                console.log('User pressed notification on Foreground', detail.notification);
                notificationHandler.decrementBadgeCount();
                break;
        }
    }

    private onBackgroundEvent = (type: EventType, detail: EventDetail) => {
        switch (type) {
            case EventType.PRESS:
                console.log('User pressed notification on Background', detail.notification);
                notificationHandler.decrementBadgeCount();
                break;
        }
    }

    private onReceiveNotification = (remoteMessage: FirebaseMessagingTypes.RemoteMessage) => {
        try {
            this._notificationHandler.createLocalNotification(remoteMessage);
        } catch (error) {
            console.warn('NotificationService -> onReceiveNotification: ', error);
        }
    }

    private processingResponse = (response: any): IResponse<any> => {
        let result: any = { isError: true, message: '' };
        if (response?.status < 400) {
            result = { isError: false, data: response.data, message: '' };
        } else if (response.error === 'validation') {
            result = { isError: true, message: response?.messages };
        } else {
            result = { isError: true, message: response?.message };
        }
        return result;
    }

}
export const notificationService = new NotificationService(requester, links);