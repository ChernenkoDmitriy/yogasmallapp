import { IMeditation } from "./IMeditation";

class MeditationService {
    constructor(
    ) { }

    requestMeditations = async (): Promise<{ meditations: IMeditation[] | null, error: string | null }> => {
        try {
            const response = await fetch('https://ta-samaya.github.io/TA.SAMAYA-DATA/files/meditations.json');
            const meditations = await response.json();
            return { meditations: meditations?.data, error: null };
        } catch (error) {
            console.warn('MeditationService -> requestMeditations: ', error);
            return { meditations: null, error: 'requestError' };
        }
    }

}

export const meditationService = new MeditationService();