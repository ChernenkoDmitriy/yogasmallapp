import React, { FC, useMemo } from 'react';
import { Text, View, Image } from 'react-native';
import { getStyle } from './styles';
import { useUiContext } from '../../../../../src/UIProvider';
import { ClockIcon } from '../../../../../assets/icons/clockIcon';

const IMAGE = require('../../../../../assets/icons/goldOrnament.png');

interface IProps {
    title?: string;
    duration?: number;
    durationMeasuring?: string;
};

export const MeditationHeader: FC<IProps> = ({ title, duration, durationMeasuring }) => {
    const { colors } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (
        <View style={styles.container}>
            <Image source={IMAGE} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
            <View style={styles.timeWrapper}>
                <ClockIcon />
                <Text style={styles.timeText}>{`${duration} ${durationMeasuring}`}</Text>
            </View>
        </View>
    )
};