import React, { FC, useMemo } from 'react';
import { useUiContext } from '../../../../src/UIProvider';
import { practiceModel } from '../../../entities/practice/PracticeModel';
import { AppHeader } from '../../../UIKit/appHeader';
import { ScreenContainer } from '../../../UIKit/screenContainer';
// import { SectionDescription } from '../../../UIKit/sectionDescription';
import { CoursesList } from '../components/coursesList';
import { getStyle } from './styles';

export const CoursesView: FC = () => {
    const { colors, t} = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (
        <ScreenContainer containerStyle={styles.container} headerComponent={<AppHeader title={t('courses')}/>}>
            {/* <SectionDescription title={t('meditationIs')} subText={t('meditationExperience')}/> */}
            <CoursesList courses={practiceModel.practices || []}/>
        </ScreenContainer>
    )
};
