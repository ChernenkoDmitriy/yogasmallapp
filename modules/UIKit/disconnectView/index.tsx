import { useNetInfo } from '@react-native-community/netinfo';
import { observer } from 'mobx-react';
import React, { FC, useMemo } from 'react'
import { Text, View } from 'react-native';
import { useUiContext } from '../../../src/UIProvider';
import { getStyle } from './styles';

export const DisconnectView: FC = observer(() => {
    const { colors, t } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);
    const netInfo = useNetInfo();

    return (!netInfo.isConnected
        ? <View style={styles.container}>
            <Text style={styles.text}>{t('lostConnection')}</Text>
        </View >
        : null
    );
});