import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import React, { FC, useCallback, useMemo } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { CalendarIcon } from '../../../../../assets/icons/calendarIcon';
import { ClockIcon } from '../../../../../assets/icons/clockIcon';
import { useUiContext } from '../../../../../src/UIProvider';
import { scaleVertical } from '../../../../../src/utils/Utils';
import { IMeditation } from '../../../../entities/meditation/IMeditation';
import { getStyle } from './styles';

const IMAGE = require('../../../../../assets/icons/goldOrnament.png');

interface IProps {
    courseDay?: IMeditation;
    numberOfDay: number;
    isAvailable: boolean;
};

export const DaysListItem: FC<IProps> = ({ courseDay, numberOfDay, isAvailable }) => {
    const { colors, t } = useUiContext()
    const styles = useMemo(() => getStyle(colors), [colors]);
    const { title, banner, duration, durationMeasuring } = courseDay || { title: '', banner: '', duration: null, durationMeasuring: 'hours' };
    const source = useMemo(() => !!banner ? { uri: banner } : IMAGE, [banner]);
    const navigation = useNavigation<NavigationProp<ParamListBase>>();

    const onPress = useCallback(() => {
        navigation.navigate('CourseStackNavigator', { screen: 'MeditationDetailsView', params: { item: courseDay } });
    }, [courseDay]);

    return (
        <TouchableOpacity style={styles.container} onPress={onPress} disabled={!isAvailable}>
            <View style={styles.dayWrapper}>
                <CalendarIcon color={colors.regularText} height={scaleVertical(15.19)} />
                <Text style={styles.timeText}>{`${numberOfDay} ${t('day')}`}</Text>
            </View>
            <Image source={source} style={styles.image} />
            <View style={styles.titleWrapper}>
                <Text numberOfLines={1} style={styles.title}>{title}</Text>
            </View>
            <View style={styles.timeWrapper}>
                <ClockIcon />
                <Text style={styles.timeText}>{`${duration} ${t(durationMeasuring)}`}</Text>
            </View>
        </TouchableOpacity>
    )
}
