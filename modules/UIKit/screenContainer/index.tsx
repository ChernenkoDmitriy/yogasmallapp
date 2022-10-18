import React, { FC, useMemo } from 'react';
import { Keyboard, ScrollView, View, ViewStyle } from 'react-native';
import { Edge, SafeAreaView } from 'react-native-safe-area-context';
import { useUiContext } from '../../../src/UIProvider';
import { getStyle } from './styles';

interface IProps {
    edges?: Edge[];
    children: React.ReactNode;
    scrollEnabled?: boolean;
    keyboardShouldPersistTaps?: boolean;
    containerStyle?: ViewStyle;
    contentContainerStyle?: ViewStyle;
    headerComponent?: React.ReactNode;
}

export const ScreenContainer: FC<IProps> = ({ headerComponent, edges, children, scrollEnabled = false, keyboardShouldPersistTaps = true, containerStyle, contentContainerStyle }) => {
    const { colors } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (
        <SafeAreaView style={[styles.container, containerStyle]} edges={edges} >
            {!!headerComponent && headerComponent}
            {scrollEnabled
                ? <ScrollView
                    scrollEnabled={scrollEnabled}
                    bounces={false}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={[styles.contentContainerStyle, contentContainerStyle]}
                    style={styles.contentContainerStyle}
                    keyboardDismissMode='interactive'
                    keyboardShouldPersistTaps={'handled'}
                >
                    {children}
                </ScrollView>
                : <View style={[styles.container, containerStyle]} onStartShouldSetResponder={keyboardShouldPersistTaps ? Keyboard.dismiss : undefined as any}>
                    {children}
                </View>}
        </SafeAreaView>
    );
};
