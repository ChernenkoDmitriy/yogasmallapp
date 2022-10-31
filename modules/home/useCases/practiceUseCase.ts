import { appStateModel } from "../../entities/appState/AppStateModel"
import { practiceModel } from "../../entities/practice/PracticeModel";
import { practiceService } from "../../entities/practice/PracticeService";

export const practiceUseCase = async (): Promise<{ error: string | null }> => {
    try {
        const response = await practiceService.requestPractices();
        practiceModel.practices = response.practices ;
        return { error: response.error };
    } catch (error: any) {
        console.warn('practiceUseCase: ', error);
        appStateModel.isLoading = false;
        return { error: 'requestError' }
    }
}