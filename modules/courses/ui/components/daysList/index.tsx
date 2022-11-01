import React, { FC, useCallback, useMemo } from 'react';
import { View, FlatList } from 'react-native';
import { IMeditation } from '../../../../entities/meditation/IMeditation';
import { DaysListItem } from '../daysListItem';
import { getStyle } from './styles';

interface IProps {
    days?: IMeditation[];
};

export const DaysList: FC<IProps> = ({ days }) => {
    const styles = useMemo(() => getStyle(), []);

    const keyExtractor = useCallback((item: IMeditation) => String(item.id), []);
    const itemSeparatorComponent = useCallback(() => <View style={styles.separator} />, []);

    const renderItem = useCallback(({ item, index }: { item: IMeditation, index: number }) => (
        <DaysListItem courseDay={item} numberOfDay={index + 1} />
    ), []);

    return (
        <FlatList
            showsVerticalScrollIndicator={false}
            data={days || []}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            ItemSeparatorComponent={itemSeparatorComponent}
            numColumns={2}
            initialNumToRender={4}
            contentContainerStyle={styles.container}
        />
    )
}
