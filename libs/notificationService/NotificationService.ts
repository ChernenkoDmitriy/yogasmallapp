import { FirebaseMessaging, IMessaging } from "./firebase";
import { notificationHandler } from "./pushNotification/NotificationHandler";
import { IRequester, IRestPost, requester } from "../requester";
import { IResponse } from "../requester/IRequester/IResponse";
import { ILinks, links } from "../../src/utils/Links";
import { Utils } from "../../src/utils/Utils";
import { FirebaseMessagingTypes } from "@react-native-firebase/messaging";
import notifee, { EventDetail, EventType } from "@notifee/react-native";

class NotificationService {
    private static instance: NotificationService;

    _notificationHandler = notificationHandler;
    _messaging!: IMessaging;

    constructor(private requester: IRequester, private links: ILinks,) {
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
        try {
            const token = await this._messaging.getFCMToken();
            const response = await this.requester.post(this.links.DELETE_FCM_TOKEN, { token });
            const result = this.processingResponse(response);
            return result;
        } catch (e) {
            return null;
        };
    };

    deleteToken = async () => {
        const token = await this._messaging.getFCMToken();
        await this._messaging.removeFCMToken();
        const response = await this.requester.delete(this.links.DELETE_FCM_TOKEN, { token }, { "x-api-key": "test" });
        const result = this.processingResponse(response);
        return result;
    }

    subscribeForeground = () => {
        const unsubscribe = this._messaging?.subscribeAppOnForegroundMessages(this.onReceiveNotification);
        const unsubscribeEvent = this._notificationHandler.subscribeAppOnForegroundEvents(this.onForegroundEvent);
        return () => {
            unsubscribe;
            unsubscribeEvent();
        };
    }

    subscribeBackground = () => {
        this._messaging?.subscribeAppOnBackgroundMessages(() => this._notificationHandler.incrementBadgeCount());
        this._notificationHandler.subscribeAppOnBackgroundEvents(this.onBackgroundEvent)
    }

    onReceiveNotification = (remoteMessage: FirebaseMessagingTypes.RemoteMessage, type: string) => {
        if (type === 'onMessage' && remoteMessage) {
            this._notificationHandler.createLocalNotification(remoteMessage);
        }
    }

    private onForegroundEvent = (type: EventType, detail: EventDetail) => {
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

    private processingResponse = (response: any): any => {
        let result: any = { isError: true, message: '', errors: {} };
        if (response?.status < 400) {
            result = { isError: false, data: response?.data || response, errors: response?.errors };
        } else {
            result = { isError: true, message: response?.data?.message, errors: response?.data?.errors };
        }
        console.log(result);
        return result;
    }

}
export const notificationService = new NotificationService(requester, links);