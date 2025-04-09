import React, { FC, useMemo } from 'react';
import { ActivityIndicator, Text, View, TouchableOpacity } from 'react-native';
import { getStyle } from './styles';
import { useUiContext } from '../../../../../src/UIProvider';
import { PlayIcon } from '../../../../../assets/icons/playIcon';
import { Slider } from '@miblanchard/react-native-slider';
import { scaleHorizontal } from '../../../../../src/utils/Utils';
import { PauseIcon } from '../../../../../assets/icons/pauseIcon';
import { MeditationVideo } from '../meditationVideo';
import { AccessInput } from '../../../../UIKit/accessInput';
import { useMeditationPlayer } from '../../../presenters/useMeditationPlayer';

interface IProps {
    code: string;
    connectionLink: string;
    isAvailable: boolean;
    setCode: (value: string) => void;
    onGetAccess: () => boolean;
};

export const MeditationPlayer: FC<IProps> = ({ code, isAvailable, connectionLink, setCode, onGetAccess }) => {
    const { colors, t } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);
    const {
        title, duration, durationMeasuring, media, banner,
        mediaRef, isPaused, currentTime, mediaDuration, setCurrentTime, setMediaDuration,
        onSetIsPaused, onSlidingComplete, onSlidingStart, onValueChange,
        timeLeft, isSeek
    } = useMeditationPlayer();

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
                            animateTransitions={true}
                            value={currentTime / mediaDuration}
                            maximumTrackTintColor={colors.blockBackground}
                            minimumTrackTintColor={colors.playerProgress}
                            trackStyle={styles.track}
                            thumbStyle={{ width: 0 }}
                            containerStyle={styles.trackContainer}
                            onSlidingStart={onSlidingStart}
                            onValueChange={onValueChange}
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
                        {timeLeft === '00:00' && currentTime === 0
                            ? <ActivityIndicator color={colors.playerProgress} size={'small'} />
                            : <Text style={styles.timeText}>{timeLeft}</Text>
                        }
                    </View>
                </View>
                : <AccessInput link={connectionLink} code={code} setCode={setCode} onGetAccess={onGetAccess} applyText={t('getAccess')} modalText={t('connectionMeditationTip')} modalButtonTitle={t('want')} />
            }
        </View>
    )
};