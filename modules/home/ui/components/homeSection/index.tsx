import React, { FC, ReactNode, useMemo } from 'react';
import { View, Text } from 'react-native';
import { getStyle } from './styles';
import { HomeSectionHeader } from '../homeSectionHeader';
import { SectionItem } from '../../../../UIKit/sectionItem';
import { useUiContext } from '../../../../../src/UIProvider';

interface IProps {
    icon?: ReactNode;
    timeIcon?: ReactNode;
    title: string;
    item?: { title: string, description: string, duration: number, durationMeasuring: 'minutes' | 'hours' | 'days' };
    sectionScreen?: string;
    itemScreen?: string;
};

export const HomeSection: FC<IProps> = ({ icon, timeIcon, title, item, sectionScreen, itemScreen }) => {
    const { colors, t } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (
        <View style={styles.container}>
            <HomeSectionHeader title={title} screen={sectionScreen} />
            {!!item
                ? <SectionItem icon={icon} timeIcon={timeIcon} item={item} stack={sectionScreen} screen={itemScreen} />
                : <Text style={styles.emptyText}>{t('empty')}</Text>
            }
        </View>
    )
};
