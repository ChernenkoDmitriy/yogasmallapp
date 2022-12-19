import React, { FC, useCallback, useMemo } from 'react';
import { useUiContext } from '../../../../src/UIProvider';
import { AppHeader } from '../../../UIKit/appHeader';
import { ScreenContainer } from '../../../UIKit/screenContainer';
import { SectionDescription } from '../../../UIKit/sectionDescription';
import { getStyle } from './styles';
import { ParamListBase, useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { IPractice } from '../../../entities/practice/IPractice';
import { DaysList } from '../components/daysList';
import { practiceModel } from '../../../entities/practice/PracticeModel';
import { observer } from 'mobx-react';
import { connectionLinksModel } from '../../../entities/connectionLinks/ConnectionLinksModel';

export const CoursesDaysView: FC = observer(() => {
    const { colors, t } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);
    const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
    const { item } = useRoute().params as { item: IPractice | null };
    const { id, title, description, content, accessCode } = item || { title: '', description: '', content: [], accessCode: null, id: -1 };

    const onGoBack = useCallback(() => { navigation.navigate('CoursesView') }, []);

    return (
        <ScreenContainer containerStyle={styles.container} headerComponent={<AppHeader isBackButton={true} onGoBack={onGoBack} title={title} />}>
            <SectionDescription title={t('aboutPractice')} subText={description} />
            <DaysList connectionLink={connectionLinksModel.links?.['course'] || ''} days={content} model={practiceModel} accessCode={accessCode} id={id} />
        </ScreenContainer>
    )
});
