import React, { FC, useMemo } from 'react';
import { useUiContext } from '../../../../src/UIProvider';
import { AppHeader } from '../../../UIKit/appHeader';
import { ScreenContainer } from '../../../UIKit/screenContainer';
import { getStyle } from './styles';
import { MeditationHeader } from '../components/meditationHeader';
import { observer } from 'mobx-react';
import { MeditationPlayer } from '../components/meditationPlayer';
import { MeditationTasks } from '../components/meditationTasks';
import { AccessInput } from '../../../UIKit/accessInput';
import { useMeditationDetails } from '../../presenters/useMeditationDetails';


export const MeditationDetailsView: FC = observer(() => {
    const { colors } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);
    const {
        title, duration, durationMeasuring, lessonTitle, lessonContent, media, banner,
        code, isAvailable, onGetAccess, onGoBack, setCode,
        mediaRef, isPaused, currentTime, mediaDuration, setCurrentTime,
        setMediaDuration, onMediaValueChange, onSetIsPaused
    } = useMeditationDetails();

    return (
        <ScreenContainer containerStyle={styles.container} headerComponent={<AppHeader isBackButton={true} onGoBack={onGoBack} />}>
            <MeditationHeader
                title={title}
                banner={banner}
                duration={duration}
                durationMeasuring={durationMeasuring}
                media={media}
                mediaRef={mediaRef}
                isPaused={isPaused}
                setCurrentTime={setCurrentTime}
                setDuration={setMediaDuration}
            />
            {isAvailable
                ? <MeditationPlayer
                    currentTime={currentTime}
                    duration={mediaDuration}
                    isPaused={isPaused}
                    onValueChange={onMediaValueChange}
                    onSetIsPaused={onSetIsPaused}
                />
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