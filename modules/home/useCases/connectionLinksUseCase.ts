import { appStateModel } from "../../entities/appState/AppStateModel"
import { connectionLinksModel } from "../../entities/connectionLinks/ConnectionLinksModel";
import { connectionLinksService } from "../../entities/connectionLinks/ConnectionLinksService";

export const connectionLinksUseCase = async (): Promise<{ error: string | null }> => {
    try {
        const response = await connectionLinksService.requestConnectionLinks();
        connectionLinksModel.links = response.links || {};
        return { error: response.error };
    } catch (error: any) {
        console.warn('connectionLinksUseCase: ', error);
        appStateModel.isLoading = false;
        return { error: 'requestError' }
    }
}