import { observer } from 'mobx-react';
import React, { FC, useMemo } from 'react';
import { useUiContext } from '../../../../src/UIProvider';
import { meditationModel } from '../../../entities/meditation/MeditationModel';
import { AppHeader } from '../../../UIKit/appHeader';
import { ScreenContainer } from '../../../UIKit/screenContainer';
import { SectionContentList } from '../components/sectionContentList';
import { SectionDescription } from '../components/sectionDescription';
import { getStyle } from './styles';

export const MeditationsView: FC = observer(() => {
    const { colors, t} = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (
        <ScreenContainer containerStyle={styles.container} headerComponent={<AppHeader title={t('meditations')}/>}>
            <SectionDescription/>
            <SectionContentList meditations={meditationModel.meditations || []}/>
        </ScreenContainer>
    )
});
