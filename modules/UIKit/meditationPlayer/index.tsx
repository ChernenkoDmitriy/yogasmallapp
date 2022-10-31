import React, { FC, useMemo, useState } from 'react';
import { Text, View } from 'react-native';
import { getStyle } from './styles';
import { useUiContext } from '../../../src/UIProvider';
import { PlayIcon } from '../../../assets/icons/playIcon';
import { Slider } from '@miblanchard/react-native-slider';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { scaleHorizontal } from '../../../src/utils/Utils';


interface IProps {

};

export const MeditationPlayer: FC<IProps> = ({ }) => {
    const { colors } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);
    const [currentTime, setCurrentTime] = useState(5);
    const [duration, setDuration] = useState(10);

    // const onValueChange = (value: number) => { video?.seek(value * duration) };

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
                // onValueChange={onValueChange}
                />
                <TouchableOpacity>
                    <PlayIcon width={scaleHorizontal(56)} height={scaleHorizontal(56)} />
                </TouchableOpacity>
            </View>
            <Text style={styles.timeText}>{`05:04`}</Text>
        </View>
    )
};