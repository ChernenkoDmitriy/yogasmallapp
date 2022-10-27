import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import React, { FC, ReactNode, useCallback, useMemo } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { PlayIcon } from '../../../assets/icons/playIcon';
import { useUiContext } from '../../../src/UIProvider';
import { appStateModel } from '../../entities/appState/AppStateModel';
import { getStyle } from './styles';

interface IProps {
    icon?: ReactNode;
    timeIcon?: ReactNode;
    item?: { title: string, description: string, duration: number, durationMeasuring: 'minutes' | 'hours' | 'days' };
    screen?: string;
    stack?: string;
};

export const SectionItem: FC<IProps> = ({ icon, timeIcon, item = null, stack, screen }) => {
    const { colors } = useUiContext();
    const { title, description, duration, durationMeasuring } = item || { title: '', description: '' };
    const styles = useMemo(() => getStyle(colors), [colors]);
    const navigation = useNavigation<NavigationProp<ParamListBase>>();

    const onPress = useCallback(() => {
        if (screen && stack) {
            appStateModel.isTabBar = false;
            navigation.navigate(stack, { screen, params: { item } });
        }
    }, [screen, stack]);

    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <View style={styles.mainInfoWrapper}>
                <View style={styles.iconWrapper}>
                    {icon}
                </View>
                <View style={styles.titleWrapper}>
                    <Text numberOfLines={2} style={styles.title}>{title}</Text>
                    <View style={styles.timeWrapper}>
                        {timeIcon}
                        <Text style={styles.timeText}>{`${duration} ${durationMeasuring}`}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.descriptionWrapper}>
                <Text numberOfLines={2} style={styles.descriptionText}>{description}</Text>
                <PlayIcon />
            </View>
        </TouchableOpacity>
    )
};
