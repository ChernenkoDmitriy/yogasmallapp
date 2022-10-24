import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { observer } from 'mobx-react';
import { CoursesView } from '../../../modules/courses/ui/coursesView';

const Stack = createStackNavigator();

export const CourseStackNavigator: FC = observer(() => {

    return (
        <Stack.Navigator initialRouteName='CoursesView' screenOptions={{ headerShown: false }} >
            <Stack.Screen name='CoursesView' component={CoursesView} />
        </Stack.Navigator >
    );
})
