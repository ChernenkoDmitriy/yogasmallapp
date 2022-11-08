import { isAvailableDaysNotPassed } from "../../../src/utils/isAvailableDaysNotPassed";
import { IMeditation } from "./IMeditation";

class MeditationService {
    constructor(private defaultAvailableDays: number) { }

    requestMeditations = async (): Promise<{ meditations: IMeditation[] | null, error: string | null }> => {
        try {
            const response = await fetch('https://ta-samaya.github.io/TA.SAMAYA-DATA/files/meditations.json');
            const meditations = await response.json();
            const filteredMeditations = this.filterMeditations(meditations?.data);
            return { meditations: filteredMeditations, error: null };
        } catch (error) {
            console.warn('MeditationService -> requestMeditations: ', error);
            return { meditations: null, error: 'requestError' };
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

    filterMeditations = (meditations: IMeditation[]): IMeditation[] => {
        const filteredMeditations = meditations.filter(item => this.isAvailable(item.startDate, item.availableDays) && item);
        return filteredMeditations;
    }
}

export const meditationService = new MeditationService(90);