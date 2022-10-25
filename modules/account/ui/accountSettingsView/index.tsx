import React, { FC, useMemo } from 'react';
import { View, Text } from 'react-native';
import { useUiContext } from '../../../../src/UIProvider';
import { getStyle } from './styles';

export const AccountSettingsView: FC = () => {
    const { colors} = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Account Settings</Text>
        </View>
    )
};
