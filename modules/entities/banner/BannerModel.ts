import { MobXRepository } from "../../../src/repository/MobXRepository";
import { IBanner } from "./IBanner";
import { IList } from "./IList";

export interface IBannerModel {
    bannersList: IList<IBanner> | null;
}

class BannerModel implements IBannerModel {
    private bannersListRepository = new MobXRepository<IList<IBanner> | null>(null);

    get bannersList() {
        return this.bannersListRepository.data || null;
    }

    set bannersList(data: IList<IBanner> | null) {
        this.bannersListRepository.save(data);
    }

    clear = () => {
        this.bannersList = null;
    }

}

export const bannerModel = new BannerModel();
