import React, { FC, useMemo, memo } from 'react';
import { Pressable, ActivityIndicator, View, ViewStyle } from 'react-native';
import { ButtonGradient } from '../../../assets/icons/buttonGradient';
import { useUiContext } from '../../../src/UIProvider';
import { getStyle } from './styles';

interface Props {
    containerStyle?: ViewStyle;
    title: string;
    onPress: () => void;
    disabled?: boolean;
    inProgress?: boolean;
}

export const MainButton: FC<Props> = memo(({ onPress = () => { }, title = '', disabled = false, inProgress = false, containerStyle = {} }) => {
    const { colors } = useUiContext();
    const styles = useMemo(() => getStyle(), []);

    return (
        <Pressable
            disabled={disabled}
            style={({ pressed }) => [styles.container, containerStyle, { opacity: pressed || disabled ? 0.7 : 1 }]}
            onPress={onPress}
        >
            <ButtonGradient colorEnd={colors.buttonGradientEnd} colorStart={colors.buttonGradientStart} title={title} />
            {inProgress ? <View style={styles.absoluteSheet}><ActivityIndicator color={colors.regularText} size='large' /></View> : null}
        </Pressable>
    );
})
