import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { observer } from 'mobx-react';
import { AboutAppView } from '../../../modules/aboutApp/ui/aboutAppView';

const Stack = createStackNavigator();

export const AboutAppStackNavigator: FC = observer(() => {

    return (
        <Stack.Navigator initialRouteName='AboutAppView' screenOptions={{ headerShown: false }} >
            <Stack.Screen name='AboutAppView' component={AboutAppView} />
        </Stack.Navigator >
    );
})
