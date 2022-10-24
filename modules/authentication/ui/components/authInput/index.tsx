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
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (
        <View style={[styles.container, containerStyle]}>
            <Text style={styles.title}>{title}</Text>
            <TextInput
                placeholderTextColor={colors.background}
                style={styles.textInput}
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={isPassword}
            />
        </View>
    )
}
