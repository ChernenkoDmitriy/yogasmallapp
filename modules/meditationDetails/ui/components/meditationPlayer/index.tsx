import React, { FC, useCallback, useMemo, useState } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { getStyle } from './styles';
import { useUiContext } from '../../../../../src/UIProvider';
import { PlayIcon } from '../../../../../assets/icons/playIcon';
import { Slider } from '@miblanchard/react-native-slider';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { scaleHorizontal } from '../../../../../src/utils/Utils';
import { PauseIcon } from '../../../../../assets/icons/pauseIcon';
import { formatTimeMMSS } from '../../../../../src/utils/formatTimeMMSS';
import { MeditationVideo } from '../meditationVideo';
import { useMeditationDetails } from '../../../presenters/useMeditationDetails';
import { AccessInput } from '../../../../UIKit/accessInput';

export const MeditationPlayer: FC = () => {
    const { colors } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);
    const {
        title, duration, durationMeasuring, media, banner,
        code, isAvailable, onGetAccess, setCode,
        mediaRef, isPaused, currentTime, mediaDuration, setCurrentTime, setMediaDuration,
        onMediaValueChange, onSetIsPaused
    } = useMeditationDetails();
    const timeLeft = useMemo(() => formatTimeMMSS(Math.floor(mediaDuration - currentTime)), [mediaDuration, currentTime]);
    const [isSeek, setIsSeek] = useState(false);

    const onSlidingComplete = (value: number | Array<number>) => {
        if (!isSeek) {
            setIsSeek(true);
            onMediaValueChange(value);
            setIsSeek(false);
        };
    };

    return (
        <View style={styles.container}>
            <MeditationVideo
                title={title}
                banner={banner}
                duration={duration}
                durationMeasuring={durationMeasuring}
                media={media}
                mediaRef={mediaRef}
                isPaused={isPaused}
                isSeek={isSeek}
                setCurrentTime={setCurrentTime}
                setDuration={setMediaDuration}
            />
            {isAvailable
                ? <View style={{ flex: 1 }}>
                    <View style={styles.player}>
                        <Slider
                            value={currentTime / mediaDuration}
                            maximumTrackTintColor={colors.blockBackground}
                            minimumTrackTintColor={colors.playerProgress}
                            trackStyle={styles.track}
                            thumbStyle={{ width: 0 }}
                            containerStyle={styles.trackContainer}
                            onSlidingComplete={onSlidingComplete}
                        />
                        <TouchableOpacity onPress={onSetIsPaused}>
                            {isPaused
                                ? <PlayIcon width={scaleHorizontal(56)} height={scaleHorizontal(56)} />
                                : <PauseIcon width={scaleHorizontal(56)} height={scaleHorizontal(56)} />
                            }
                        </TouchableOpacity>
                    </View>
                    <View style={styles.timeWrapper}>
                        {(timeLeft === '00:00' && currentTime === 0) || isSeek
                            ? <ActivityIndicator color={colors.playerProgress} size={'small'} />
                            : <Text style={styles.timeText}>{timeLeft}</Text>
                        }
                    </View>
                </View>
                : <AccessInput code={code} setCode={setCode} onGetAccess={onGetAccess} />
            }
        </View>
    )
};