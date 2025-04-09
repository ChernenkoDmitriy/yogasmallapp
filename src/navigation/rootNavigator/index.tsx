import React, { FC, useCallback } from 'react';
import { KeyboardAvoidingView, StatusBar } from 'react-native';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { observer } from 'mobx-react';
import { Utils } from '../../utils/Utils';
import { useUiContext } from '../../UIProvider';
import { LoadingView } from '../../../modules/UIKit/loadingView';
import { DisconnectView } from '../../../modules/UIKit/disconnectView';
import { TabNavigator } from '../tabNavigator';
import BootSplash from "react-native-bootsplash";

export const RootNavigator: FC = observer(() => {
    const { colors, theme } = useUiContext();

    const onReady = () => BootSplash.hide({ fade: true });

    const MyTheme = {
        ...DefaultTheme,
        colors: {
            ...DefaultTheme.colors,
            ...colors
        },
    };
    return (
        <KeyboardAvoidingView style={{ flex: 1, backgroundColor: colors.background }} behavior={Utils.isIOS ? 'padding' : undefined}>
            <StatusBar backgroundColor={colors.background} barStyle={theme === 'dark' ? 'light-content' : 'dark-content'} />
            <NavigationContainer
                theme={MyTheme}
                onReady={onReady}
            >
                <TabNavigator />
            </NavigationContainer>
            <LoadingView />
            <DisconnectView />
        </KeyboardAvoidingView>
    );
});
