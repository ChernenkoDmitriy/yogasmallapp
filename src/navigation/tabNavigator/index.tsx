import React, { FC, useMemo } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { observer } from 'mobx-react';
import { useUiContext } from '../../UIProvider';
import { getStyle } from './styles';
import { HomeStackNavigator } from '../stackNavigators/homeStackNavigator';
import { HomeIcon } from '../../../assets/icons/homeIcon';
import { scaleHorizontal } from '../../utils/Utils';
import { MeditationStackNavigator } from '../stackNavigators/meditationStackNavigator';
import { AccountStackNavigator } from '../stackNavigators/accountStackNavigator';
import { AboutAppStackNavigator } from '../stackNavigators/aboutAppStackNavigator';
import { CourseStackNavigator } from '../stackNavigators/courseStackNavigator';
import { appStateModel } from '../../../modules/entities/appState/AppStateModel';
import { MeditationIcon } from '../../../assets/icons/meditationIcon';
import { CourseIcon } from '../../../assets/icons/courseIcon';
import { AccountIcon } from '../../../assets/icons/accountIcon';
import { MoreIcon } from '../../../assets/icons/moreIcon';

const Tab = createBottomTabNavigator();

export const TabNavigator: FC = observer(() => {
    const { colors, t } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarShowLabel: true,
            tabBarStyle: appStateModel.isTabBar ? styles.tabBarStyle : styles.noTabBar,
            tabBarLabelStyle: styles.tabBarLabelStyle,
            tabBarActiveTintColor: colors.focusedTab,
            tabBarInactiveTintColor: colors.blurredTab,
            tabBarHideOnKeyboard: true,
            // unmountOnBlur: true,
        }}
        >
            <Tab.Screen
                name={'HomeStackNavigator'}
                component={HomeStackNavigator}
                options={{
                    tabBarLabel: t('home'),
                    tabBarIcon: (params) =>
                        <HomeIcon color={params.focused ? colors.focusedTab : colors.blurredTab} width={scaleHorizontal(24)} height={scaleHorizontal(24)} />
                }}
            />
            <Tab.Screen
                name={'MeditationStackNavigator'}
                component={MeditationStackNavigator}
                options={{
                    tabBarLabel: t('meditations'),
                    tabBarIcon: (params) =>
                        <MeditationIcon color={params.focused ? colors.focusedTab : colors.blurredTab} width={scaleHorizontal(26)} height={scaleHorizontal(26)} />
                }}
            />
            <Tab.Screen
                name={'CourseStackNavigator'}
                component={CourseStackNavigator}
                options={{
                    tabBarLabel: t('courses'),
                    tabBarIcon: (params) =>
                        <CourseIcon color={params.focused ? colors.focusedTab : colors.blurredTab} width={scaleHorizontal(26)} height={scaleHorizontal(26)} />
                }}
            />
            <Tab.Screen
                name={'AccountStackNavigator'}
                component={AccountStackNavigator}
                options={{
                    tabBarLabel: t('account'),
                    tabBarIcon: (params) =>
                        <AccountIcon color={params.focused ? colors.focusedTab : colors.blurredTab} width={scaleHorizontal(26)} height={scaleHorizontal(26)} />
                }}
            />
            <Tab.Screen
                name={'AboutAppStackNavigator'}
                component={AboutAppStackNavigator}
                options={{
                    tabBarLabel: t('more'),
                    tabBarIcon: (params) =>
                        <MoreIcon color={params.focused ? colors.focusedTab : colors.blurredTab} width={scaleHorizontal(26)} height={scaleHorizontal(26)} />
                }}
            />
        </Tab.Navigator>
    );
});