import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { observer } from 'mobx-react';
import { AuthorizationView } from '../../../modules/authentication/ui/AuthorizationView';

const Stack = createStackNavigator();

export const AuthStackNavigator: FC = observer(() => {

    return (
        <Stack.Navigator initialRouteName='AuthorizationView' screenOptions={{ headerShown: false }} >
            <Stack.Screen name='AuthorizationView' component={AuthorizationView} />
        </Stack.Navigator >
    );
})
