import React, { FC, useEffect, useMemo, useState } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { getStyle } from './styles';
import { useUiContext } from '../../../../../src/UIProvider';
import { PlayIcon } from '../../../../../assets/icons/playIcon';
import { Slider } from '@miblanchard/react-native-slider';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { scaleHorizontal } from '../../../../../src/utils/Utils';
import { PauseIcon } from '../../../../../assets/icons/pauseIcon';
import { formatTimeMMSS } from '../../../../../src/utils/formatTimeMMSS';


interface IProps {
    currentTime: number;
    duration: number;
    isPaused: boolean;
    onValueChange: (value: number) => void;
    onSetIsPaused: () => void;
};

export const MeditationPlayer: FC<IProps> = ({ currentTime, duration, isPaused, onValueChange, onSetIsPaused }) => {
    const { colors } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);
    const timeLeft = useMemo(() => formatTimeMMSS(Math.floor(duration - currentTime)), [duration, currentTime]);
    const [isFinished, setIsFinished] = useState(false);

    useEffect(() => {
        if (Math.round(currentTime) === Math.round(duration) && !isFinished && currentTime !== 0) {
            setIsFinished(true);
            onSetIsPaused();
        };
        if (Math.floor(currentTime) < Math.floor(duration)) {
            setIsFinished(false);
        };
    }, [currentTime, duration, isFinished]);

    return (
        <View style={styles.container}>
            <View style={styles.player}>
                <Slider
                    value={(currentTime || 0) / duration}
                    maximumTrackTintColor={colors.blockBackground}
                    minimumTrackTintColor={colors.playerProgress}
                    trackStyle={styles.track}
                    thumbStyle={{ width: 0 }}
                    containerStyle={styles.trackContainer}
                    //@ts-ignore
                    onValueChange={onValueChange}
                />
                <TouchableOpacity onPress={onSetIsPaused}>
                    {isPaused
                        ? <PlayIcon width={scaleHorizontal(56)} height={scaleHorizontal(56)} />
                        : <PauseIcon width={scaleHorizontal(56)} height={scaleHorizontal(56)} />
                    }
                </TouchableOpacity>
            </View>
            {timeLeft === '00:00' && currentTime === 0
                ? <ActivityIndicator color={colors.playerProgress} size={'small'} />
                : <Text style={styles.timeText}>{timeLeft}</Text>
            }
        </View>
    )
};