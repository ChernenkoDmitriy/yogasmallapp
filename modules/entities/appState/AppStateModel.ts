import { MobXRepository } from "../../../src/repository/MobXRepository";

export interface ISettingModel {
    isLoading: boolean;
}

class AppStateModel implements ISettingModel {
    private isLoadingRepository = new MobXRepository(false);

    constructor() {

    }

    get isLoading() {
        return this.isLoadingRepository.data || false;
    }

    set isLoading(data: boolean) {
        this.isLoadingRepository.save(data);
    }

}

export const appStateModel = new AppStateModel();
