import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { observer } from 'mobx-react';
import { MeditationsView } from '../../../modules/meditations/ui/meditationsView';

const Stack = createStackNavigator();

export const MeditationStackNavigator: FC = observer(() => {

    return (
        <Stack.Navigator initialRouteName='MeditationsView' screenOptions={{ headerShown: false }} >
            <Stack.Screen name='MeditationsView' component={MeditationsView} />
        </Stack.Navigator >
    );
})
