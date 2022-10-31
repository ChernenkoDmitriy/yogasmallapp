import React, { FC, useCallback, useMemo } from 'react';
import { View, FlatList } from 'react-native';
import { CalendarIcon } from '../../../../../assets/icons/calendarIcon';
import { CourseSectionIcon } from '../../../../../assets/icons/courseSectionIcon';
import { IPractice } from '../../../../entities/practice/IPractice';
import { SectionItem } from '../../../../UIKit/sectionItem';
import { getStyle } from './styles';

interface Props {
    courses?: IPractice[];
};

export const CoursesList: FC<Props> = ({ courses }) => {
    const styles = useMemo(() => getStyle(), []);

    const keyExtractor = useCallback((item: IPractice) => String(item.id), []);
    const itemSeparatorComponent = useCallback(() => <View style={styles.separator} />, []);

    const renderItem = useCallback(({ item }: { item: IPractice }) => (
        <SectionItem icon={<CourseSectionIcon />} timeIcon={<CalendarIcon />} item={item} stack={'CourseStackNavigator'} screen={'CoursesDaysView'} />
    ), []);

    return (
        <FlatList
            showsVerticalScrollIndicator={false}
            data={courses || []}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            ItemSeparatorComponent={itemSeparatorComponent}
            numColumns={1}
            initialNumToRender={4}
            contentContainerStyle={styles.container}
        />
    )
}
