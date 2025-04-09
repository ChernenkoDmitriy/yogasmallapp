import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';
import { App } from './src/App';
import { name as appName } from './app.json';
import { LogBox } from 'react-native';
import { getMessaging, setBackgroundMessageHandler } from '@react-native-firebase/messaging';
import notifee, { EventType } from '@notifee/react-native';
import { notificationService } from './libs/notificationService/NotificationService';

LogBox.ignoreLogs(['RCTBridge required dispatch_sync to load REAModule. This may lead to deadlocks']);

notificationService.subscribeBackground();

AppRegistry.registerComponent(appName, () => App);