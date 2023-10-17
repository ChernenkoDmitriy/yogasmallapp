import React, { FC, useCallback } from 'react';
import { KeyboardAvoidingView, StatusBar} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { observer } from 'mobx-react';
import { Utils } from '../../utils/Utils';
import { useUiContext } from '../../UIProvider';
import { LoadingView } from '../../../modules/UIKit/loadingView';
import { DisconnectView } from '../../../modules/UIKit/disconnectView';
import { TabNavigator } from '../tabNavigator';
import SplashScreen from 'react-native-splash-screen';

export const RootNavigator: FC = observer(() => {
    const { colors, theme } = useUiContext();

    const onReady = useCallback(() => { setTimeout(() => SplashScreen.hide(), 1000) }, []);

    return (
        <KeyboardAvoidingView style={{ flex: 1, backgroundColor: colors.background }} behavior={Utils.isIOS ? 'padding' : undefined}>
            <StatusBar backgroundColor={colors.background} barStyle={theme === 'dark' ? 'light-content' : 'dark-content'} />
            <NavigationContainer theme={{ colors } as any} onReady={onReady}>
                <TabNavigator />
            </NavigationContainer>
            <LoadingView />
            <DisconnectView />
        </KeyboardAvoidingView>
    );
});
