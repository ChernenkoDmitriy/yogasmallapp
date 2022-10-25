import React, { FC, useMemo } from 'react';
import { useUiContext } from '../../../../src/UIProvider';
import { AppHeader } from '../../../UIKit/appHeader';
import { ScreenContainer } from '../../../UIKit/screenContainer';
import { getStyle } from './styles';

export const MeditationsView: FC = () => {
    const { colors, t} = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (
        <ScreenContainer containerStyle={styles.container} headerComponent={<AppHeader title={t('meditations')}/>}>
            
        </ScreenContainer>
    )
};
