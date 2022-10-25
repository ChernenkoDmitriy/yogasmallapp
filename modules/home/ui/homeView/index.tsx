import React, { FC, useMemo } from 'react';
import { useUiContext } from '../../../../src/UIProvider';
import { bannerModel } from '../../../entities/banner/BannerModel';
import { AppHeader } from '../../../UIKit/appHeader';
import { ScreenContainer } from '../../../UIKit/screenContainer';
import { useHome } from '../../presenters/useHome';
import { HomeBannersCarousel } from '../components/homeBannersCarousel';
import { getStyle } from './styles';

export const HomeView: FC = () => {
    const { colors, t } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);
    useHome();

    return (
        <ScreenContainer containerStyle={styles.container} headerComponent={<AppHeader title={t('startJourneyOneLine')} />} >
            <HomeBannersCarousel banners={bannerModel.bannersList || []} />
        </ScreenContainer>
    )
};
