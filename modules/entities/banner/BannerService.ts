// import { IRestPost, requester } from "../../../libs/requester";
// import { ILinks, links } from "../../../src/utils/Links";

import { IBanner } from "./IBanner";

class BannerService {
    constructor(
        // private requestor: IRestPost,
        // private links: ILinks,
    ) { }

    requestBanners = async (): Promise<{ banners: IBanner[] | null, error: string | null }> => {
        try {
            const banners = require('../../../__mocks__/banners.json');
            return { banners: banners?.data, error: null };
        } catch (error) {
            console.warn('UserService -> authorizeStaticUsers: ', error);
            return { banners: null, error: 'requestError' };
        }
    }

}

export const bannerService = new BannerService();