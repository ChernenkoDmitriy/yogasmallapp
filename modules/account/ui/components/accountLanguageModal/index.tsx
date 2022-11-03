import React, { FC, useCallback, useMemo } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useUiContext } from '../../../../../src/UIProvider';
import { getStyle } from './styles';
import ReactNativeModal from 'react-native-modal';

interface IProps {
    isVisible: boolean;
    onClose: () => void;
}

export const AccountLanguageModal: FC<IProps> = ({ isVisible, onClose }) => {
    const { colors, t, locales, setLocale } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    const onPress = useCallback((language: string) => () => { setLocale(language) }, []);

    return (
        <ReactNativeModal
            isVisible={isVisible}
            style={styles.container}
            swipeDirection={'down'}
            onSwipeComplete={onClose}
            onBackdropPress={onClose}
            backdropOpacity={0.8}
        >
            <View style={styles.contentWrapper}>
                <View style={styles.swipeIndicator} />
                {locales.map(item =>
                    <TouchableOpacity key={item} style={styles.button} onPress={onPress(item)}>
                        <Text style={styles.title}>{t(item)}</Text>
                    </TouchableOpacity>
                )}
            </View>
        </ReactNativeModal>
    )
};
