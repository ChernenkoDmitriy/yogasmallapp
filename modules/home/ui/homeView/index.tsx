import React, { FC, useMemo } from 'react';
import { ClockIcon } from '../../../../assets/icons/clockIcon';
import { MeditationSectionIcon } from '../../../../assets/icons/meditationSectionIcon';
import { useUiContext } from '../../../../src/UIProvider';
import { IBanner } from '../../../entities/banner/IBanner';
import { AppHeader } from '../../../UIKit/appHeader';
import { ScreenContainer } from '../../../UIKit/screenContainer';
import { HomeBannersCarousel } from '../components/homeBannersCarousel';
import { HomeSection } from '../components/homeSection';
import { bannerModel } from '../../../entities/banner/BannerModel';
import { useHome } from '../../presenters/useHome';
import { getStyle } from './styles';

const MOCK_BANNERS: IBanner[] = require('../../../../__mocks__/banners.json').data;
const MOCK_MEDITATIONS: { title: string; description: string; duration: number; durationMeasuring: 'minutes' | 'hours' | 'days'; }[] = require('../../../../__mocks__/meditations.json').data;

export const HomeView: FC = () => {
    const { colors, t } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);
    useHome();

    return (
        <ScreenContainer containerStyle={styles.container} headerComponent={<AppHeader title={t('startJourneyOneLine')} />} >
            <HomeBannersCarousel banners={bannerModel.bannersList || []} />
            <HomeSection icon={<MeditationSectionIcon/>} timeIcon={<ClockIcon/>} title={t('meditations')} item={MOCK_MEDITATIONS[0]} sectionScreen={'MeditationStackNavigator'} itemScreen={'MeditationDetailsView'} />
            <HomeSection title={t('courses')} />
        </ScreenContainer>
    )
};
