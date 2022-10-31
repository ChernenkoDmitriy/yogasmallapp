import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { observer } from 'mobx-react';
import { CoursesView } from '../../../modules/courses/ui/coursesView';
import { CoursesDaysView } from '../../../modules/courses/ui/coursesDaysView';
import { IMeditation } from '../../../modules/entities/meditation/IMeditation';
import { MeditationDetailsView } from '../../../modules/meditationDetails/ui/meditationDetailsView';

const Stack = createStackNavigator();

export const CourseStackNavigator: FC = observer(() => {

    return (
        <Stack.Navigator initialRouteName='CoursesView' screenOptions={{ headerShown: false }} >
            <Stack.Screen name='CoursesView' component={CoursesView} />
            <Stack.Screen name='CoursesDaysView' component={CoursesDaysView} />
            <Stack.Screen name='MeditationDetailsView' initialParams={{ item: null as IMeditation | null }} component={MeditationDetailsView} />
        </Stack.Navigator >
    );
})
