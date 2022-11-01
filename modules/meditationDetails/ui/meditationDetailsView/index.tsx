import React, { FC, useMemo } from 'react';
import { useUiContext } from '../../../../src/UIProvider';
import { AppHeader } from '../../../UIKit/appHeader';
import { ScreenContainer } from '../../../UIKit/screenContainer';
import { getStyle } from './styles';
import { MeditationHeader } from '../components/meditationHeader';
import { observer } from 'mobx-react';
import { MeditationPlayer } from '../components/meditationPlayer';
import { MeditationTasks } from '../components/meditationTasks';
import { AccessInput } from '../components/accessInput';
import { useMeditationDetails } from '../../presenters/useMeditationDetails';


export const MeditationDetailsView: FC = observer(() => {
    const { colors } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);
    const {
        title, duration, durationMeasuring, lessonTitle, lessonContent,
        code, setCode,
        isAvailable,
        onGetAccess,
        onGoBack,
    } = useMeditationDetails();

    return (
        <ScreenContainer containerStyle={styles.container} headerComponent={<AppHeader isBackButton={true} onGoBack={onGoBack} />}>
            <MeditationHeader
                title={title}
                duration={duration}
                durationMeasuring={durationMeasuring}
            />
            {isAvailable
                ? <MeditationPlayer />
                : <AccessInput code={code} setCode={setCode} onGetAccess={onGetAccess} />
            }
            <MeditationTasks
                title={lessonTitle}
                tasks={lessonContent}
                isAvailable={isAvailable}
            />
        </ScreenContainer>
    )
});