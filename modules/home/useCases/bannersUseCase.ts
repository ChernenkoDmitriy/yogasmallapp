import { appStateModel } from "../../entities/appState/AppStateModel"
import { bannerModel } from "../../entities/banner/BannerModel";
import { bannerService } from "../../entities/banner/BannerService";

export const bannersUseCase = async (): Promise<{ error: string | null }> => {
    try {
        const response = await bannerService.requestBanners();
        bannerModel.bannersList = response.banners;
        return { error: response.error };
    } catch (error: any) {
        console.warn('bannersUseCase: ', error);
        appStateModel.isLoading = false;
        return { error: 'requestError' }
    }
}