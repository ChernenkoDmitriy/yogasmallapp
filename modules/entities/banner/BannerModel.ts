import { MobXRepository } from "../../../src/repository/MobXRepository";
import { IBanner } from "./IBanner";

export interface IBannerModel {
    bannersList: IBanner[] | null;
}

class BannerModel implements IBannerModel {
    private bannersListRepository = new MobXRepository<IBanner[] | null>(null);

    get bannersList() {
        return this.bannersListRepository.data || null;
    }

    set bannersList(data: IBanner[] | null) {
        this.bannersListRepository.save(data);
    }

    clear = () => {
        this.bannersList = null;
    }

}

export const bannerModel = new BannerModel();
