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
    accessCode: string[] | null;
    id: number;
    connectionLink: string;
};

export const DaysList: FC<IProps> = ({ days, model, accessCode, id, connectionLink }) => {
    const { t } = useUiContext();
    const { code, setCode, isAvailable, onGetAccess } = useAvailability(model, accessCode, id);
    const styles = useMemo(() => getStyle(isAvailable), [isAvailable]);

    const keyExtractor = useCallback((item: IMeditation) => String(item.id), []);
    const itemSeparatorComponent = useCallback(() => <View style={styles.separator} />, []);

    const renderItem = useCallback(({ item }: { item: IMeditation, index: number }) => (
        <DaysListItem courseDay={item} numberOfDay={item.dayNumber} isAvailable={isAvailable} />
    ), [isAvailable]);

    return (
        <View style={styles.container}>
            {!isAvailable &&
                <AccessInput
                    link={connectionLink}
                    title={t('enterPasscodeCourse')}
                    modalTitle={t('applyForCourse')}
                    modalText={t('connectionCourseTip')}
                    modalButtonTitle={t('participate')}
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
                contentContainerStyle={styles.flatListContainer}
            />
        </View>
    )
}
