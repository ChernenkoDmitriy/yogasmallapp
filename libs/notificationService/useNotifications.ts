import { useEffect } from "react";
import { notificationService } from "./NotificationService";
import { AuthorizationStatus } from "@notifee/react-native";

export const useNotifications = () => {
    useEffect(() => {
        notificationService.requestPermissions().then(status => {
            notificationService.createChannels()
            if (status !== AuthorizationStatus.DENIED) {
                notificationService.register();
            };
        });
        const unsubscribe = notificationService.subscribeForeground();
        notificationService.removeAllDeliveredNotifications();

        return () => {
            unsubscribe();
        };
    }, []);
};