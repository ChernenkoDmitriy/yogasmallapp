import React, { FC, useMemo } from 'react';
import { View, Text } from 'react-native';
import { useUiContext } from '../../../src/UIProvider';
import { getStyle } from './styles';

interface IProps {
    title?: string;
    subText?: string;
}

export const SectionDescription: FC<IProps> = ({ title, subText }) => {
    const { colors } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subText}>{subText}</Text>
        </View>
    )
}
