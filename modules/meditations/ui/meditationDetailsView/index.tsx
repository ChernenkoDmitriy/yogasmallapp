import React, { FC, useCallback, useEffect, useMemo } from 'react';
import { useUiContext } from '../../../../src/UIProvider';
import { AppHeader } from '../../../UIKit/appHeader';
import { ScreenContainer } from '../../../UIKit/screenContainer';
import { getStyle } from './styles';
import { ParamListBase, useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { MeditationHeader } from '../components/meditationHeader';
import { meditationModel } from '../../../entities/meditation/MeditationModel';
import { observer } from 'mobx-react';
import { MeditationPlayer } from '../components/meditationPlayer';
import { MeditationTasks } from '../components/meditationTasks';
import { appStateModel } from '../../../entities/appState/AppStateModel';
import { IMeditation } from '../../../entities/meditation/IMeditation';

export const MeditationDetailsView: FC = observer(() => {
    const { colors } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);
    const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
    const { item } = useRoute().params as { item: IMeditation | null };

    useEffect(() => {
        if (item) {
            meditationModel.chosenMeditations = item;
        }
    }, [item]);

    const onGoBack = useCallback(() => {
        navigation.navigate('MeditationsView');
        appStateModel.isTabBar = true;
    }, []);

    return (
        <ScreenContainer containerStyle={styles.container} headerComponent={<AppHeader isBackButton={true} onGoBack={onGoBack} />}>
            <MeditationHeader
                title={meditationModel.chosenMeditations?.title}
                duration={meditationModel.chosenMeditations?.duration}
                durationMeasuring={meditationModel.chosenMeditations?.durationMeasuring}
            />
            <MeditationPlayer />
            <MeditationTasks
                title={meditationModel.chosenMeditations?.lessonTitle}
                tasks={meditationModel.chosenMeditations?.lessonContent}
            />
        </ScreenContainer>
    )
});