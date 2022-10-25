import React, { useMemo } from 'react';
import { View } from 'react-native';
import Animated, { Extrapolate, interpolate, SharedValue, useAnimatedStyle } from 'react-native-reanimated';
import { useUiContext } from '../../../../../src/UIProvider';
import { scaleHorizontal } from '../../../../../src/utils/Utils';
import { getStyle } from './styles';

interface IProps {
    index: number;
    backgroundColor: string;
    length: number;
    animValue: SharedValue<number>;
}

export const PaginationItem: React.FC<IProps> = (props) => {
    const { animValue, index, length, backgroundColor } = props;
    const { colors } = useUiContext();
    const width = scaleHorizontal(8);
    const styles = useMemo(() => getStyle(colors, width, backgroundColor), [colors, width, backgroundColor]);

    const animStyle = useAnimatedStyle(() => {
        let inputRange = [index - 1, index, index + 1];
        let outputRange = [-width, 0, width];

        if (index === 0 && animValue?.value > length - 1) {
            inputRange = [length - 1, length, length + 1];
            outputRange = [-width, 0, width];
        }

        return {
            transform: [
                {
                    translateX: interpolate(
                        animValue?.value,
                        inputRange,
                        outputRange,
                        Extrapolate.CLAMP
                    ),
                },
            ],
        };
    }, [animValue, index, length]);
    return (
        <View style={styles.container} >
            <Animated.View style={[styles.indicator, animStyle,]} />
        </View>
    );
};