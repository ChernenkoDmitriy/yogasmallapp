import React, { FC, useMemo } from 'react';
import { View, TextInput, ViewStyle, Text } from 'react-native';
import { useUiContext } from '../../../../../src/UIProvider';
import { getStyle } from './styles';

interface Props {
    containerStyle?: ViewStyle;
    onChangeText: (data: string) => void;
    value: string;
    title: string;
    isPassword?: boolean;
}

export const AuthInput: FC<Props> = ({ value, onChangeText, title, containerStyle, isPassword = false }) => {
    const { colors } = useUiContext();
    const styles = useMemo(() => getStyle(colors, value.length >= 19), [colors, value]);

    return (
        <View style={[styles.container, containerStyle]}>
            <View style={styles.titleWrapper}>
                <Text style={styles.title}>{title}</Text>
            </View>
            <TextInput
                placeholderTextColor={colors.background}
                style={styles.textInput}
                value={value}
                cursorColor={colors.focusedTab}
                onChangeText={onChangeText}
                secureTextEntry={isPassword}
            />
        </View>
    )
}
