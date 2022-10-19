import { observer } from 'mobx-react';
import React, { FC, useEffect, useMemo, useState } from 'react'
import { Text, View } from 'react-native';
import { netInfoObserver } from '../../../libs/netInfo/netInfoObserver';
import { useUiContext } from '../../../src/UIProvider';
import { getStyle } from './styles';

export const DisconnectView: FC = observer(() => {
    const { colors, t } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);
    const [isConnected, setIsConnected] = useState(false);

    useEffect(() => {
        netInfoObserver.subscribeNetInfo(setIsConnected);
        return () => { netInfoObserver.unsubscribe() };
    }, []);

    return (!isConnected
        ? <View style={styles.container}>
            <Text style={styles.text}>{t('lostConnection')}</Text>
        </View >
        : null
    );
});