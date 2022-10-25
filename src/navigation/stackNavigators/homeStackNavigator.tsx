import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { observer } from 'mobx-react';
import { MainView } from '../../../modules/main/ui';

const Stack = createStackNavigator();

export const HomeStackNavigator: FC = observer(() => {

    return (
        <Stack.Navigator initialRouteName='AuthorizationView' screenOptions={{ headerShown: false }} >
            <Stack.Screen name='MainView' component={MainView} />
        </Stack.Navigator >
    );
})
