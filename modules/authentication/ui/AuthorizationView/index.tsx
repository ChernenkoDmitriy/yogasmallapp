import { observer } from 'mobx-react';
import React, { FC, useMemo } from 'react';
import { View, Text, Image } from 'react-native';
import { useUiContext } from '../../../../src/UIProvider';
import { MainButton } from '../../../UIKit/mainButton';
import { ScreenContainer } from '../../../UIKit/screenContainer';
import { useAuthorization } from '../../presenters/useAuthorization';
import { AuthInput } from '../components/authInput';
import { AuthTitle } from '../components/authTitle';
import { getStyle } from './styles';

const BACKGROUND_IMAGE = require('../../../../assets/icons/gradientOrnament.png');

export const AuthorizationView: FC = observer(() => {
    const { colors, t } = useUiContext();
    const {
        login, onChangeLogin, code, onChangeCode, error, onAuthorization
    } = useAuthorization();
    const styles = useMemo(() => getStyle(colors, !!error), [colors, error]);

    return (
        <ScreenContainer containerStyle={styles.container}>
            <Image style={styles.backgroundImage} source={BACKGROUND_IMAGE} resizeMode={'contain'} />
            <View style={styles.contentWrapper}>
                <AuthTitle />
                <View style={styles.inputWrapper}>
                    <AuthInput title={t('login')} value={login} onChangeText={onChangeLogin} />
                    <AuthInput title={t('enterCode')} value={code} onChangeText={onChangeCode} />
                </View>
                <View style={styles.errorWrapper}>
                    <Text style={styles.errorText}>{error}</Text>
                </View>
                <Text style={styles.tip}>{t('haveProblems')}</Text>
            </View>
            <MainButton title={t('startMyJourney')} onPress={onAuthorization} containerStyle={styles.authButtonWrapper} />
        </ScreenContainer>
    )
})
