import React, { FC, useCallback, useMemo } from 'react';
import { View, Text, TouchableOpacity, Linking } from 'react-native';
import { getStyle } from './styles';
import ReactNativeModal from 'react-native-modal';
import { useUiContext } from '../../../src/UIProvider';
import { MainButton } from '../mainButton';
import { CrossIcon } from '../../../assets/icons/crossIcon';
import { scaleVertical } from '../../../src/utils/Utils';

interface IProps {
    modalTitle?: string;
    modalText?: string;
    modalButtonTitle?: string;
    link: string;
    isVisible: boolean;
    onClose: () => void;
}

export const ConnectionModal: FC<IProps> = ({ isVisible, modalTitle, modalText, modalButtonTitle, link, onClose }) => {
    const { colors } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    const onOpenLink = useCallback(async () => { await Linking.canOpenURL(link) && await Linking.openURL(link) }, [link]);

    return (
        <ReactNativeModal
            isVisible={isVisible}
            style={styles.container}
            backdropOpacity={0.8}
        >
            <View style={styles.contentWrapper}>
                <View style={styles.header}>
                    <Text style={styles.title}>{modalTitle}</Text>
                    <TouchableOpacity style={styles.closeButton} onPress={onClose}>
                        <CrossIcon color={colors.regularText} height={scaleVertical(15)} />
                    </TouchableOpacity>
                </View>
                <Text style={styles.TipText}>{modalText}</Text>
                <MainButton title={modalButtonTitle || ''} onPress={onOpenLink} containerStyle={styles.mailButton} />
            </View>
        </ReactNativeModal>
    )
};
