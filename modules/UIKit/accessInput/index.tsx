import React, { FC, useCallback, useMemo, useState } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { getStyle } from './styles';
import { useUiContext } from '../../../src/UIProvider';
import { MainButton } from '../mainButton';
import { MailModal } from '../mailModal';

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
    const [isVIsible, setIsVIsible] = useState(false);
    const styles = useMemo(() => getStyle(colors, isCorrectCode), [colors, isCorrectCode]);
    const inputTitle = useMemo(() => isCorrectCode ? (title || t('enterPasscode')) : t('incorrectPasscode'), [title, isCorrectCode]);

    const handleOnGetAccess = () => { setIsCorrectCode(onGetAccess()) };
    const onSetIsVisible = useCallback(() => { setIsVIsible(prevState => !prevState) }, []);

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
                <TouchableOpacity onPress={onSetIsVisible} style={styles.applyButton}>
                    <Text style={styles.title}>{applyText}</Text>
                </TouchableOpacity>
            }
            <MailModal isVisible={isVIsible} onClose={onSetIsVisible} />
        </View>
    )
};