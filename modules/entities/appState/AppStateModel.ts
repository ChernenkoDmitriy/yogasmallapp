import { MobXRepository } from "../../../src/repository/MobXRepository";

export interface ISettingModel {
    isLoading: boolean;
    isTabBar: boolean;
}

class AppStateModel implements ISettingModel {
    private isLoadingRepository = new MobXRepository(false);
    private isTabBarRepository = new MobXRepository(true);

    constructor() {

    }

    get isLoading() {
        return this.isLoadingRepository.data || false;
    }

    set isLoading(data: boolean) {
        this.isLoadingRepository.save(data);
    }
    
    get isTabBar() {
        return this.isTabBarRepository.data ?? true;
    }

    set isTabBar(data: boolean) {
        this.isTabBarRepository.save(data);
    }

}

export const appStateModel = new AppStateModel();
