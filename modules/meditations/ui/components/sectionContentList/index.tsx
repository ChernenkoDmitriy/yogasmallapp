import React, { FC, useCallback, useMemo } from 'react';
import { View, FlatList } from 'react-native';
import { ClockIcon } from '../../../../../assets/icons/clockIcon';
import { MeditationSectionIcon } from '../../../../../assets/icons/meditationSectionIcon';
import { IMeditation } from '../../../../entities/meditation/IMeditation';
import { SectionItem } from '../../../../UIKit/sectionItem';
import { getStyle } from './styles';

interface Props {
    meditations?: IMeditation[];
}

export const SectionContentList: FC<Props> = ({ meditations }) => {
    const styles = useMemo(() => getStyle(), []);

    const keyExtractor = useCallback((item: IMeditation) => String(item.id), []);
    const itemSeparatorComponent = useCallback(() => <View style={styles.separator} />, []);

    const renderItem = useCallback(({ item }: { item: IMeditation }) => (
        <SectionItem icon={<MeditationSectionIcon />} timeIcon={<ClockIcon />} item={item} stack={'MeditationStackNavigator'} screen={'MeditationDetailsView'} />
    ), []);

    return (
        <FlatList
            showsVerticalScrollIndicator={false}
            data={meditations || []}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            ItemSeparatorComponent={itemSeparatorComponent}
            numColumns={1}
            initialNumToRender={4}
            contentContainerStyle={styles.container}
        />
    )
}
