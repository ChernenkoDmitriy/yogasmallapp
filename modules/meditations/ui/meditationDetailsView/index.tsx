import React, { FC, useCallback, useMemo } from 'react';
import { useUiContext } from '../../../../src/UIProvider';
import { Text } from 'react-native';
import { AppHeader } from '../../../UIKit/appHeader';
import { ScreenContainer } from '../../../UIKit/screenContainer';
import { getStyle } from './styles';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export const MeditationDetailsView: FC = () => {
    const { colors, t } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);
    const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

    const onGoBack = useCallback(()=>navigation.navigate('MeditationsView'),[])

    return (
        <ScreenContainer containerStyle={styles.container} headerComponent={<AppHeader isBackButton={true} title={t('meditations')} onGoBack={onGoBack} />}>
            <Text style={styles.text}>MeditationDetailsView</Text>
        </ScreenContainer>
    )
};