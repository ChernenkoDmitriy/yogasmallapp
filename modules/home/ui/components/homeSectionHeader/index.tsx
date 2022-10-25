import { Link, NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import React, { FC, useCallback, useMemo } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ArrowRightIcon } from '../../../../../assets/icons/arrowRightIcon';
import { useUiContext } from '../../../../../src/UIProvider';
import { getStyle } from './styles';

interface IProps {
    title: string;
    screen?: string;
};

export const HomeSectionHeader: FC<IProps> = ({ title, screen }) => {
    const { colors, t } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);
    const navigation = useNavigation<NavigationProp<ParamListBase>>();

    const onPress = useCallback(() => screen && navigation.navigate(screen), [screen]);

    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.textWrapper}>
                <Text style={styles.link}>{t('all')}</Text>
                <ArrowRightIcon />
            </View>
        </TouchableOpacity>
    )
};
