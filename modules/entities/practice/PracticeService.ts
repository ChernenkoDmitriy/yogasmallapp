import { isAvailableDaysNotPassed } from "../../../src/utils/isAvailableDaysNotPassed";
import { IPractice } from "./IPractice";

class PracticeService {
    constructor(private defaultAvailableDays: number) { }

    requestPractices = async (): Promise<{ practices: IPractice[] | null, error: string | null }> => {
        try {
            const response = await fetch('https://ta-samaya.github.io/TA.SAMAYA-DATA/files/practices.json');
            const practices = await response.json();
            const filteredPractices = this.filterPractices(practices?.data);
            return { practices: filteredPractices, error: null };
        } catch (error) {
            console.warn('PracticeService -> requestPractices: ', error);
            return { practices: null, error: 'requestError' };
        }
    }

    private isAvailable = (startDate: string, availableDays: number) => {
        if (!startDate) {
            return true;
        } else if (availableDays) {
            return isAvailableDaysNotPassed(startDate, availableDays);
        } else {
            return isAvailableDaysNotPassed(startDate, this.defaultAvailableDays);
        }
    }

    filterPractices = (practices: IPractice[]): IPractice[] => {
        const filteredPractices = practices.filter(item => this.isAvailable(item.startDate, item.availableDays) && item);
        return filteredPractices;
    }

}

export const practiceService = new PracticeService(90);