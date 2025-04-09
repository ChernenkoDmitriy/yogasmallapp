import notifee, { AndroidImportance } from '@notifee/react-native';
import { FirebaseMessagingTypes } from '@react-native-firebase/messaging';
import { Platform } from 'react-native';

const isIOS = Platform.OS === 'ios';

class NotificationHandler {
    _onNotification!: Function;
    _onRegister!: Function;

    createChannel = async (type: string = 'default') => {
        let channel = '';
        if (!isIOS) {
            switch (type) {
                case '':
                    break;
                default:
                    channel = await notifee.createChannel({
                        id: 'default',
                        name: 'Default Channel',
                        sound: 'default',
                        importance: AndroidImportance.HIGH
                    });
                    break;
            }
        }
        return channel;
    };

    requestPermission = async () => {
        const { authorizationStatus } = await notifee.requestPermission();
        return authorizationStatus;
    };

    createLocalNotification = async (remoteMessage: FirebaseMessagingTypes.RemoteMessage): Promise<void> => {
        try {
            if (typeof remoteMessage?.data?.notifee === 'string') {
                const { title, body, imageUrl } = JSON.parse(remoteMessage?.data?.notifee);
                notifee.incrementBadgeCount();
                await notifee.displayNotification({
                    id: remoteMessage.messageId,
                    title,
                    body,
                    android: {
                        channelId: 'default',
                        pressAction: { id: 'default' },
                        largeIcon: imageUrl,
                        importance: AndroidImportance.HIGH,
                        sound: 'default'
                    },
                    ios: {
                        sound: 'default',
                        attachments: [
                            {
                                url: imageUrl,
                            }
                        ],
                    }
                });
            }
        } catch (e) {
            console.log('createLocalNotification ===> ', e)
        }
    }

    subscribeAppOnForegroundEvents = (callBack: Function) => {
        const unsubscribe = notifee.onForegroundEvent(({ type, detail }) => callBack(type, detail));

        return () => {
            unsubscribe();
        };
    }

    subscribeAppOnBackgroundEvents = (callBack: Function) => {
        notifee.onBackgroundEvent(async ({ type, detail }) => { callBack(type, detail) });
    }

    incrementBadgeCount = (incrementBy?: undefined | number) => {
        notifee.incrementBadgeCount(incrementBy);
    }

    decrementBadgeCount = (decrementBy?: undefined | number) => {
        notifee.incrementBadgeCount(decrementBy);
    }

    removeAllDeliveredNotifications = (): void => {
        notifee.setBadgeCount(0);
        notifee.cancelAllNotifications();
    }
}

export const notificationHandler = new NotificationHandler();