import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import { observer } from 'mobx-react';
import React, { FC, useCallback, useMemo, useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { useUiContext } from '../../../../src/UIProvider';
import { bannerModel } from '../../../entities/banner/BannerModel';
import { meditationModel } from '../../../entities/meditation/MeditationModel';
import { practiceModel } from '../../../entities/practice/PracticeModel';
import { userModel } from '../../../entities/user/UserModel';
import { AppHeader } from '../../../UIKit/appHeader';
import { MainButton } from '../../../UIKit/mainButton';
import { ScreenContainer } from '../../../UIKit/screenContainer';
import { AccountLanguageModal } from '../components/accountLanguageModal';
import { getStyle } from './styles';

export const AccountSettingsView: FC = observer(() => {
    const { colors, t, locale } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);
    const navigation = useNavigation<NavigationProp<ParamListBase>>();
    const [isVisible, setIsVisible] = useState(false);

    const onSetIsVisible = useCallback(() => { setIsVisible(prevState => !prevState) }, []);

    const onLogout = useCallback(() => {
        navigation.navigate('HomeStackNavigator');
        userModel.clear();
        bannerModel.clear();
        meditationModel.clear();
        practiceModel.clear();
    }, []);

    return (
        <ScreenContainer containerStyle={styles.container} headerComponent={<AppHeader title={userModel.user?.name || t('user')} />}>
            <TouchableOpacity style={styles.settingsBlock} onPress={onSetIsVisible}>
                <Text style={styles.settingsTitle}>{t('language')}</Text>
                <Text style={styles.localeText}>{locale}</Text>
            </TouchableOpacity>
            {/* <MainButton title={t('logout')} colorEnd={colors.blockBackground} colorStart={colors.blockBackground} onPress={onLogout} containerStyle={styles.logoutButton} /> */}
            <AccountLanguageModal isVisible={isVisible} onClose={onSetIsVisible} />
        </ScreenContainer>
    )
});