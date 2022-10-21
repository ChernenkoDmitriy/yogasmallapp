import React, { FC, useMemo } from 'react';
import { View, Text } from 'react-native';
import { useUiContext } from '../../../../../src/UIProvider';
import { getStyle } from './styles';

export const AuthTitle: FC = () => {
    const { colors, t } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (
        <View style={styles.container}>
            <Text style={styles.subText}>{t('welcome')}</Text>
            <Text numberOfLines={2} style={styles.title}>{t('startJourney')}</Text>
            <Text style={styles.subText}>{t('useLoginCode')}</Text>
        </View>
    )
}
