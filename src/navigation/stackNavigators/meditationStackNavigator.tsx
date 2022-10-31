import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { observer } from 'mobx-react';
import { MeditationDetailsView } from '../../../modules/meditationDetails/ui/meditationDetailsView';
import { IMeditation } from '../../../modules/entities/meditation/IMeditation';
import { MeditationsView } from '../../../modules/meditations/ui/meditationsView';

const Stack = createStackNavigator();

export const MeditationStackNavigator: FC = observer(() => {

    return (
        <Stack.Navigator initialRouteName='MeditationsView' screenOptions={{ headerShown: false, animationEnabled: false }} >
            <Stack.Screen name='MeditationsView' component={MeditationsView} />
            <Stack.Screen
                name='MeditationDetailsView'
                initialParams={{
                    item: null as IMeditation | null,
                    prevScreen: 'MeditationsView',
                }}
                component={MeditationDetailsView}
            />
        </Stack.Navigator >
    );
})
