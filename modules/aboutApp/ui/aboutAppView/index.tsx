import React, { FC, useMemo } from 'react';
import { Text } from 'react-native';
import { useUiContext } from '../../../../src/UIProvider';
import { AppHeader } from '../../../UIKit/appHeader';
import { ScreenContainer } from '../../../UIKit/screenContainer';
import { getStyle } from './styles';

export const AboutAppView: FC = () => {
    const { colors, t } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (
        <ScreenContainer headerComponent={<AppHeader title={t('more')}/>}>
            <Text style={styles.title}>{t('aboutApp')}</Text>
            <Text style={styles.text}>{t('appDescription')}</Text>
        </ScreenContainer>
    )
};
