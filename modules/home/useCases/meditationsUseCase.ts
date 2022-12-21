import { appStateModel } from "../../entities/appState/AppStateModel"
import { meditationModel } from "../../entities/meditation/MeditationModel";
import { meditationService } from "../../entities/meditation/MeditationService";

export const meditationsUseCase = async (): Promise<{ error: string | null }> => {
    try {
        const response = await meditationService.requestMeditations();
        meditationModel.meditations = response.meditations;
        return { error: response.error };
    } catch (error: any) {
        console.warn('meditationsUseCase: ', error);
        appStateModel.isLoading = false;
        return { error: 'requestError' }
    }
}