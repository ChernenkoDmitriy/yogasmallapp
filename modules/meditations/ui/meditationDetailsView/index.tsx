import React, { FC, useCallback, useMemo } from 'react';
import { useUiContext } from '../../../../src/UIProvider';
import { AppHeader } from '../../../UIKit/appHeader';
import { ScreenContainer } from '../../../UIKit/screenContainer';
import { getStyle } from './styles';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { MeditationHeader } from '../components/meditationHeader';
import { meditationModel } from '../../../entities/meditation/MeditationModel';
import { observer } from 'mobx-react';

export const MeditationDetailsView: FC = observer(() => {
    const { colors } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);
    const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
    meditationModel.chosenMeditations = meditationModel.meditations?.[0] || null;
    const onGoBack = useCallback(() => navigation.navigate('MeditationsView'), []);

    return (
        <ScreenContainer containerStyle={styles.container} headerComponent={<AppHeader isBackButton={true} onGoBack={onGoBack} />}>
            <MeditationHeader
                title={meditationModel.chosenMeditations?.title}
                duration={meditationModel.chosenMeditations?.duration}
                durationMeasuring={meditationModel.chosenMeditations?.durationMeasuring}
            />
            {/* 
            <MeditationPlayer/>
            <MeditationTasks/>
             */}
        </ScreenContainer>
    )
});