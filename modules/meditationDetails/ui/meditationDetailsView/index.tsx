import React, { FC } from 'react';
import { AppHeader } from '../../../UIKit/appHeader';
import { ScreenContainer } from '../../../UIKit/screenContainer';
import { observer } from 'mobx-react';
import { MeditationPlayer } from '../components/meditationPlayer';
import { MeditationTasks } from '../components/meditationTasks';
import { useMeditationDetails } from '../../presenters/useMeditationDetails';
import { connectionLinksModel } from '../../../entities/connectionLinks/ConnectionLinksModel';

export const MeditationDetailsView: FC = observer(() => {
    const {
        lessonTitle, lessonContent, onGoBack,
        code, setCode, isAvailable, onGetAccess
    } = useMeditationDetails();

    return (
        <ScreenContainer headerComponent={<AppHeader isBackButton={true} onGoBack={onGoBack} />}>
            <MeditationTasks
                header={<MeditationPlayer
                    connectionLink={connectionLinksModel.links?.['meditation'] || ''}
                    code={code}
                    setCode={setCode}
                    onGetAccess={onGetAccess}
                    isAvailable={isAvailable}
                />}
                title={lessonTitle}
                tasks={lessonContent}
                isAvailable={isAvailable}
            />
        </ScreenContainer>
    )
});