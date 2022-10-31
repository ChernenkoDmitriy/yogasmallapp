import React, { FC, useMemo } from 'react';
import { Text, View, TextInput } from 'react-native';
import { getStyle } from './styles';
import { useUiContext } from '../../../../../src/UIProvider';
import { MainButton } from '../../../../UIKit/mainButton';

interface IProps {
    code: string;
    setCode: (value: string) => void;
    onGetAccess: () => void;
};

export const AccessInput: FC<IProps> = ({ code, setCode, onGetAccess }) => {
    const { colors, t } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{t('enterPasscode')}</Text>
            <View style={styles.inputWrapper}>
                <TextInput
                    style={styles.input}
                    value={code}
                    cursorColor={colors.focusedTab}
                    onChangeText={setCode}
                    placeholder={t('passcode')}
                    placeholderTextColor={colors.subText}
                />
            </View>
            <MainButton title={t('getAccess')} onPress={onGetAccess} containerStyle={styles.button} />
        </View>
    )
};