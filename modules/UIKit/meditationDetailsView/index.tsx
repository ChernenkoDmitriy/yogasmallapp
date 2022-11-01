import React, { FC, useCallback, useMemo } from 'react';
import { useUiContext } from '../../../src/UIProvider';
import { AppHeader } from '../appHeader';
import { ScreenContainer } from '../screenContainer';
import { getStyle } from './styles';
import { ParamListBase, useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { MeditationHeader } from '../meditationHeader';
import { observer } from 'mobx-react';
import { MeditationPlayer } from '../meditationPlayer';
import { MeditationTasks } from '../meditationTasks';
import { appStateModel } from '../../entities/appState/AppStateModel';
import { IMeditation } from '../../entities/meditation/IMeditation';

export const MeditationDetailsView: FC = observer(() => {
    const { colors } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);
    const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
    const { item, prevScreen } = useRoute().params as { item: IMeditation | null, prevScreen: string };
    const { title, duration, durationMeasuring, lessonTitle, lessonContent } = item || { title: '', duration: undefined, durationMeasuring: 'minutes', lessonTitle: '', lessonContent: [] };

    const onGoBack = useCallback(() => {
        if (prevScreen) {
            navigation.navigate(prevScreen);
            appStateModel.isTabBar = true;
        } else if (navigation.canGoBack()) {
            navigation.goBack();
        };
    }, [prevScreen]);

    return (
        <ScreenContainer containerStyle={styles.container} headerComponent={<AppHeader isBackButton={true} onGoBack={onGoBack} />}>
            <MeditationHeader
                title={title}
                duration={duration}
                durationMeasuring={durationMeasuring}
            />
            <MeditationPlayer />
            <MeditationTasks
                title={lessonTitle}
                tasks={lessonContent}
            />
        </ScreenContainer>
    )
});