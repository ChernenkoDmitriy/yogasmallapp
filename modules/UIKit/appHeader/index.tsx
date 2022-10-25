import React, { FC, useMemo, memo } from 'react';
import { Text, View, ViewStyle, TouchableOpacity } from 'react-native';
import { ArrowBackIcon } from '../../../assets/icons/arrowBackIcon';
import { useUiContext } from '../../../src/UIProvider';
import { getStyle } from './styles';

interface Props {
    containerStyle?: ViewStyle;
    titleStyle?: ViewStyle;
    title?: string;
    isBackButton?: boolean;
    onGoBack?: () => void;
}

export const AppHeader: FC<Props> = memo(({ title, isBackButton = false, containerStyle = {}, titleStyle = {}, onGoBack }) => {
    const { colors } = useUiContext();
    const styles = useMemo(() => getStyle(colors, isBackButton), [colors]);

    return (
        <View style={[styles.container, containerStyle]}>
            <TouchableOpacity style={styles.backButton} disabled={!isBackButton} onPress={onGoBack}>
                <ArrowBackIcon />
            </TouchableOpacity>
            {!!title && <Text style={[styles.title, titleStyle]}>{title}</Text>}
        </View>
    );
})
