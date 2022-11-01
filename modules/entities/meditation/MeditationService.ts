import { IMeditation } from "./IMeditation";

class MeditationService {
    constructor(
        // private requestor: IRestPost,
        // private links: ILinks,
    ) { }

    requestMeditations = async (): Promise<{ meditations: IMeditation[] | null, error: string | null }> => {
        try {
            const response = require('../../../__mocks__/meditations.json');
            return { meditations: response?.data, error: null };
        } catch (error) {
            console.warn('MeditationService -> requestMeditations: ', error);
            return { meditations: null, error: 'requestError' };
        }
    }

}

export const meditationService = new MeditationService();