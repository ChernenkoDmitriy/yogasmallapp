import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { observer } from 'mobx-react';
import { AccountSettingsView } from '../../../modules/account/ui/accountSettingsView';

const Stack = createStackNavigator();

export const AccountStackNavigator: FC = observer(() => {

    return (
        <Stack.Navigator initialRouteName='AccountSettingsView' screenOptions={{ headerShown: false }} >
            <Stack.Screen name='AccountSettingsView' component={AccountSettingsView} />
        </Stack.Navigator >
    );
})
