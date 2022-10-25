import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { observer } from 'mobx-react';
import { HomeView } from '../../../modules/home/ui/homeView';

const Stack = createStackNavigator();

export const HomeStackNavigator: FC = observer(() => {

    return (
        <Stack.Navigator initialRouteName='HomeView' screenOptions={{ headerShown: false }} >
            <Stack.Screen name='HomeView' component={HomeView} />
        </Stack.Navigator >
    );
})
