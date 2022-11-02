import React, { FC, useCallback, useMemo, useState } from 'react';
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
    onGetAccess: () => boolean;
};

export const AccessInput: FC<IProps> = ({ title, code, applyText, setCode, onGetAccess }) => {
    const { colors, t } = useUiContext();
    const [isCorrectCode, setIsCorrectCode] = useState(true);
    const styles = useMemo(() => getStyle(colors, isCorrectCode), [colors, isCorrectCode]);
    const inputTitle = useMemo(() => isCorrectCode ? (title || t('enterPasscode')) : t('incorrectPasscode'), [title, isCorrectCode]);

    const onOpenMail = useCallback(async () => { await Linking.canOpenURL(MAIL) && await Linking.openURL(MAIL) }, []);
    const handleOnGetAccess = () => { setIsCorrectCode(onGetAccess()) };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{inputTitle}</Text>
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
            <MainButton title={t('getAccess')} onPress={handleOnGetAccess} containerStyle={styles.button} />
            {!!applyText &&
                <TouchableOpacity onPress={onOpenMail} style={styles.applyButton}>
                    <Text style={styles.title}>{applyText}</Text>
                </TouchableOpacity>
            }
        </View>
    )
};