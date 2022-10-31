import React, { FC, useCallback, useMemo } from 'react';
import { Text, View } from 'react-native';
import { getStyle } from './styles';
import { useUiContext } from '../../../../../src/UIProvider';
import { FlatList } from 'react-native-gesture-handler';
import { observer } from 'mobx-react-lite';

interface IProps {
    title?: string;
    tasks?: string[];
    isAvailable: boolean;
};

export const MeditationTasks: FC<IProps> = observer(({ title, tasks, isAvailable }) => {
    const { colors } = useUiContext();
    const styles = useMemo(() => getStyle(colors, isAvailable), [colors, isAvailable]);

    const keyExtractor = useCallback((item: string, index: number) => item + index, []);

    const renderItem = useCallback(({ item, index }: { item: string, index: number }) => (
        <Text style={styles.taskText}>{`${index + 1}) ${item}`}</Text>
    ), []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={tasks || []}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                numColumns={1}
                initialNumToRender={4}
                style={{ flex: 1 }}
                scrollEnabled={isAvailable}
            />
        </View>
    )
});