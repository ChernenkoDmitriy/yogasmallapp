import React, { FC, useCallback, useMemo } from 'react';
import { Text, View, TextInput, TouchableOpacity, Linking } from 'react-native';
import { getStyle } from './styles';
import { useUiContext } from '../../../src/UIProvider';
import { MainButton } from '../mainButton';

const MAIL = 'mailto:mlagency.dating@gmail.com';

interface IProps {
    title?: string;
    code: string;
    applyText?: string;
    setCode: (value: string) => void;
    onGetAccess: () => void;
};

export const AccessInput: FC<IProps> = ({ title, code, applyText, setCode, onGetAccess }) => {
    const { colors, t } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    const onOpenMail = useCallback(async () => { await Linking.canOpenURL(MAIL) && await Linking.openURL(MAIL) }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title || t('enterPasscode')}</Text>
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
            {!!applyText &&
                <TouchableOpacity onPress={onOpenMail} style={styles.applyButton}>
                    <Text style={styles.title}>{applyText}</Text>
                </TouchableOpacity>
            }
        </View>
    )
};