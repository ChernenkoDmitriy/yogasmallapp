import React, { FC, useCallback, useMemo } from 'react';
import { View } from 'react-native';
import { useUiContext } from '../../../../src/UIProvider';
import { bannerModel } from '../../../entities/banner/BannerModel';
import { meditationModel } from '../../../entities/meditation/MeditationModel';
import { practiceModel } from '../../../entities/practice/PracticeModel';
import { userModel } from '../../../entities/user/UserModel';
import { MainButton } from '../../../UIKit/mainButton';
import { getStyle } from './styles';

export const AccountSettingsView: FC = () => {
    const { colors, t } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    const onLogout = useCallback(() => { 
        userModel.clear();
        bannerModel.clear();
        meditationModel.clear();
        practiceModel.clear();
    }, []);

    return (
        <View style={styles.container}>
            <View></View>
            <MainButton title={t('logout')} colorEnd={colors.blockBackground} colorStart={colors.blockBackground} onPress={onLogout} containerStyle={styles.logoutButton} />
        </View>
    )
};
