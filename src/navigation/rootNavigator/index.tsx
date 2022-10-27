import React, { FC } from 'react';
import { KeyboardAvoidingView, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { AuthStackNavigator } from '../stackNavigators/authStackNavigator';
import { observer } from 'mobx-react';
import { Utils } from '../../utils/Utils';
import { useUiContext } from '../../UIProvider';
import { LoadingView } from '../../../modules/UIKit/loadingView';
import { DisconnectView } from '../../../modules/UIKit/disconnectView';
import { userModel } from '../../../modules/entities/user/UserModel';
import { TabNavigator } from '../tabNavigator';
import RNBootSplash from "react-native-bootsplash";

export const RootNavigator: FC = observer(() => {
    const { colors, theme } = useUiContext();

    const onReady = () => { setTimeout(() =>{ RNBootSplash.hide({ fade: true })}, 1000) };

    return (
        <KeyboardAvoidingView style={{ flex: 1, backgroundColor: colors.background }} behavior={Utils.isIOS ? 'padding' : undefined}>
            <StatusBar backgroundColor={colors.background} barStyle={theme === 'dark' ? 'light-content' : 'dark-content'} />
            <NavigationContainer onReady={onReady }>
                {!userModel.user
                    ? <AuthStackNavigator />
                    : <TabNavigator />
                }
            </NavigationContainer>
            <LoadingView />
            <DisconnectView />
        </KeyboardAvoidingView>
    );
});
