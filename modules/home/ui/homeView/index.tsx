import React, { FC, useMemo } from 'react';
import { ClockIcon } from '../../../../assets/icons/clockIcon';
import { MeditationSectionIcon } from '../../../../assets/icons/meditationSectionIcon';
import { useUiContext } from '../../../../src/UIProvider';
import { AppHeader } from '../../../UIKit/appHeader';
import { ScreenContainer } from '../../../UIKit/screenContainer';
import { HomeBannersCarousel } from '../components/homeBannersCarousel';
import { HomeSection } from '../components/homeSection';
import { bannerModel } from '../../../entities/banner/BannerModel';
import { useHome } from '../../presenters/useHome';
import { getStyle } from './styles';
import { meditationModel } from '../../../entities/meditation/MeditationModel';
import { observer } from 'mobx-react';
import { CourseSectionIcon } from '../../../../assets/icons/courseSectionIcon';
import { CalendarIcon } from '../../../../assets/icons/calendarIcon';
import { practiceModel } from '../../../entities/practice/PracticeModel';

export const HomeView: FC = observer(() => {
    const { colors, t } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);
    useHome();

    return (
        <ScreenContainer scrollEnabled={true} contentContainerStyle={styles.container} headerComponent={<AppHeader title={t('startJourneyOneLine')} />} >
            <HomeBannersCarousel banners={bannerModel.bannersList || []} />
            <HomeSection icon={<MeditationSectionIcon />} timeIcon={<ClockIcon />} title={t('meditations')} item={meditationModel.meditations?.[0]} sectionScreen={'MeditationStackNavigator'} itemScreen={'MeditationDetailsView'} />
            <HomeSection icon={<CourseSectionIcon />} timeIcon={<CalendarIcon />} title={t('courses')} item={practiceModel.practices?.[0]} sectionScreen={'CourseStackNavigator'} itemScreen={'CoursesDaysView'} />
        </ScreenContainer>
    )
});
