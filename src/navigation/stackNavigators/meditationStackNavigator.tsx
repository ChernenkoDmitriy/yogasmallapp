import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { observer } from 'mobx-react';
import { MeditationDetailsView } from '../../../modules/meditationDetails/ui/meditationDetailsView';
import { MeditationsView } from '../../../modules/meditations/ui/meditationsView';
import { IMeditation } from '../../../modules/entities/meditation/IMeditation';

const Stack = createStackNavigator();

export interface IRouteParams {
    item: IMeditation | null,
    prevScreen: string,
};

export const MeditationStackNavigator: FC = observer(() => {

    return (
        <Stack.Navigator initialRouteName='MeditationsView' screenOptions={{ headerShown: false }} >
            <Stack.Screen name='MeditationsView' component={MeditationsView} />
            <Stack.Screen
                name='MeditationDetailsView'
                initialParams={{ item: null, prevScreen: 'MeditationsView' } as IRouteParams}
                component={MeditationDetailsView}
            />
        </Stack.Navigator >
    );
})
