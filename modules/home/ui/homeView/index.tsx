import React, { FC, useMemo } from 'react';
import { useUiContext } from '../../../../src/UIProvider';
import { IBanner } from '../../../entities/banner/IBanner';
import { AppHeader } from '../../../UIKit/appHeader';
import { ScreenContainer } from '../../../UIKit/screenContainer';
import { HomeBannersCarousel } from '../components/homeBannersCarousel';
import { getStyle } from './styles';

const MOCK_BANNERS: IBanner[] = require('../../../../__mocks__/banners.json').data;

export const HomeView: FC = () => {
    const { colors, t } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (
        <ScreenContainer containerStyle={styles.container} headerComponent={<AppHeader title={t('startJourneyOneLine')} />} >
            <HomeBannersCarousel banners={MOCK_BANNERS} />
        </ScreenContainer>
    )
};
