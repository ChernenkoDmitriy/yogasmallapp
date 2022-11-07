import React, { FC, useCallback, useMemo } from 'react';
import { View, Text, TouchableOpacity, Linking } from 'react-native';
import { getStyle } from './styles';
import ReactNativeModal from 'react-native-modal';
import { useUiContext } from '../../../src/UIProvider';
import { MainButton } from '../mainButton';
import { CrossIcon } from '../../../assets/icons/crossIcon';
import { scaleVertical } from '../../../src/utils/Utils';

const MAIL = 'mailto:mlagency.dating@gmail.com';

interface IProps {
    isVisible: boolean;
    onClose: () => void;
}

export const MailModal: FC<IProps> = ({ isVisible, onClose }) => {
    const { colors, t } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    const onOpenMail = useCallback(async () => { await Linking.canOpenURL(MAIL) && await Linking.openURL(MAIL) }, []);

    return (
        <ReactNativeModal
            isVisible={isVisible}
            style={styles.container}
            backdropOpacity={0.8}
        >
            <View style={styles.contentWrapper}>
                <View style={styles.header}>
                    <Text style={styles.title}>{t('applyForCourse')}</Text>
                    <TouchableOpacity style={styles.closeButton} onPress={onClose}>
                        <CrossIcon color={colors.regularText} height={scaleVertical(15)} />
                    </TouchableOpacity>
                </View>
                <Text style={styles.TipText}>{t('mailTip')}</Text>
                <MainButton title={t('openMail')} onPress={onOpenMail} containerStyle={styles.mailButton} />
            </View>
        </ReactNativeModal>
    )
};
