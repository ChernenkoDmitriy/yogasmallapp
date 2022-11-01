import { IPractice } from "./IPractice";

class PracticeService {
    constructor(
        // private requestor: IRestPost,
        // private links: ILinks,
    ) { }

    requestPractices = async (): Promise<{ practices: IPractice[] | null, error: string | null }> => {
        try {
            const response = require('../../../__mocks__/practices.json');
            return { practices: response?.data, error: null };
        } catch (error) {
            console.warn('PracticeService -> requestPractices: ', error);
            return { practices: null, error: 'requestError' };
        }
    }

}

export const practiceService = new PracticeService();