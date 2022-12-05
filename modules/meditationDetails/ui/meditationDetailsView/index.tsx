import React, { FC } from 'react';
import { AppHeader } from '../../../UIKit/appHeader';
import { ScreenContainer } from '../../../UIKit/screenContainer';
import { observer } from 'mobx-react';
import { MeditationPlayer } from '../components/meditationPlayer';
import { MeditationTasks } from '../components/meditationTasks';
import { useMeditationDetails } from '../../presenters/useMeditationDetails';

export const MeditationDetailsView: FC = observer(() => {
    const { lessonTitle, lessonContent, isAvailable, onGoBack } = useMeditationDetails();

    return (
        <ScreenContainer headerComponent={<AppHeader isBackButton={true} onGoBack={onGoBack} />}>
            <MeditationTasks
                header={<MeditationPlayer />}
                title={lessonTitle}
                tasks={lessonContent}
                isAvailable={isAvailable}
            />
        </ScreenContainer>
    )
});