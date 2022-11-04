import { IPractice } from "./IPractice";

class PracticeService {
    constructor(
    ) { }

    requestPractices = async (): Promise<{ practices: IPractice[] | null, error: string | null }> => {
        try {
            const response = await fetch('https://ta-samaya.github.io/TA.SAMAYA-DATA/files/practices.json');
            const practices = await response.json();
            return { practices: practices?.data, error: null };
        } catch (error) {
            console.warn('PracticeService -> requestPractices: ', error);
            return { practices: null, error: 'requestError' };
        }
    }

}

export const practiceService = new PracticeService();