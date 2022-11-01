import React, { FC, useCallback, useMemo } from 'react';
import { View, FlatList } from 'react-native';
import { IMeditation } from '../../../../entities/meditation/IMeditation';
import { DaysListItem } from '../daysListItem';
import { getStyle } from './styles';
import { IPracticeModel } from '../../../../entities/practice/PracticeModel';
import { useAvailability } from "../../../../../libs/hooks/useAvailability";
import { useUiContext } from '../../../../../src/UIProvider';
import { AccessInput } from '../../../../UIKit/accessInput';

interface IProps {
    days: IMeditation[];
    model: IPracticeModel;
    accessCode: string;
    id: number;
};

export const DaysList: FC<IProps> = ({ days, model, accessCode, id }) => {
    const { t } = useUiContext();
    const { code, setCode, isAvailable, onGetAccess } = useAvailability(model, accessCode, id);
    const styles = useMemo(() => getStyle(isAvailable), [isAvailable]);

    const keyExtractor = useCallback((item: IMeditation) => String(item.id), []);
    const itemSeparatorComponent = useCallback(() => <View style={styles.separator} />, []);

    const renderItem = useCallback(({ item, index }: { item: IMeditation, index: number }) => (
        <DaysListItem courseDay={item} numberOfDay={index + 1} isAvailable={isAvailable} />
    ), [isAvailable]);

    return (
        <View style={styles.container}>
            {!isAvailable &&
                <AccessInput
                    title={t('enterPasscodeCourse')}
                    code={code}
                    setCode={setCode}
                    onGetAccess={onGetAccess}
                    applyText={t('applyCourse')}
                />
            }
            <FlatList
                showsVerticalScrollIndicator={false}
                data={days || []}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                ItemSeparatorComponent={itemSeparatorComponent}
                numColumns={2}
                initialNumToRender={4}
                scrollEnabled={isAvailable}
                contentContainerStyle={styles.flatListContainer}
            />
        </View>
    )
}
