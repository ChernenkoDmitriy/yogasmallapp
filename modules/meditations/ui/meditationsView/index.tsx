import { observer } from 'mobx-react';
import React, { FC, useEffect, useMemo } from 'react';
import { useUiContext } from '../../../../src/UIProvider';
import { meditationModel } from '../../../entities/meditation/MeditationModel';
import { AppHeader } from '../../../UIKit/appHeader';
import { ScreenContainer } from '../../../UIKit/screenContainer';
import { MeditationsList } from '../components/meditationsList';
import { SectionDescription } from '../../../UIKit/sectionDescription';
import { getStyle } from './styles';
import { useIsFocused } from '@react-navigation/native';
import { appStateModel } from '../../../entities/appState/AppStateModel';

export const MeditationsView: FC = observer(() => {
    const { colors, t } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);
    const isFocused = useIsFocused();

    useEffect(() => {
        if (isFocused) {
            appStateModel.isTabBar = true;
        }
    }, [isFocused]);

    return (
        <ScreenContainer containerStyle={styles.container} headerComponent={<AppHeader title={t('meditationsAndPractices')} />}>
            <SectionDescription title={t('meditationTitle')} subText={t('meditationDescription')} />
            <MeditationsList meditations={meditationModel.meditations || []} />
        </ScreenContainer>
    )
});
