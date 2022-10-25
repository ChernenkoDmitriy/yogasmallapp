import { useNetInfo } from '@react-native-community/netinfo';
import React, { FC, useMemo } from 'react'
import { Text, View, Image } from 'react-native';
import { useUiContext } from '../../../src/UIProvider';
import { getStyle } from './styles';

const BACKGROUND_IMAGE = require('../../../assets/icons/gradientOrnament.png');

export const DisconnectView: FC = () => {
    const { colors, t } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);
    const netInfo = useNetInfo();
    const isConnected = useMemo(() => netInfo.isConnected || typeof netInfo.isConnected !== 'boolean', [netInfo]);

    return (!isConnected
        ? <View style={styles.container}>
            <Image source={BACKGROUND_IMAGE} style={styles.backgroundImage} />
            <Text style={styles.text}>{t('lostConnection')}</Text>
        </View >
        : null
    );
};