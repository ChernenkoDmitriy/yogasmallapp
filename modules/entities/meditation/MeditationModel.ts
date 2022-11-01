import { IStorage, storage } from "../../../libs/storage";
import { MobXRepository } from "../../../src/repository/MobXRepository";
import { IMeditation } from "./IMeditation";

export interface IMeditationModel {
    meditations: IMeditation[] | null;
    meditationsCodes: IMeditationsCode[];
}

interface IMeditationsCode { meditationId: number, accessCode: string };

class MeditationModel implements IMeditationModel {
    private meditationsRepository = new MobXRepository<IMeditation[]>([]);
    private meditationsCodesRepository = new MobXRepository<IMeditationsCode[]>([]);

    constructor(private storage: IStorage) {
        this.load();
    }

    private persistMeditationsCodes = (data: IMeditationsCode[]) => {
        if (data) {
            this.storage.set('MEDITATIONS_CODES', data);
        } else {
            this.storage.remove('MEDITATIONS_CODES');
        }
    }

    private load = () => {
        this.storage.get('MEDITATIONS_CODES')
            .then(data => { data && this.meditationsCodesRepository.save(data) })
            .catch(error => console.warn('MeditationModel -> load: ', error));
    }

    get meditations() {
        return this.meditationsRepository.data || null;
    }

    set meditations(data: IMeditation[] | null) {
        this.meditationsRepository.save(data);
    }

    get meditationsCodes() {
        return this.meditationsCodesRepository.data || [];
    }

    set meditationsCodes(data: IMeditationsCode[]) {
        this.meditationsCodesRepository.save(data);
        this.persistMeditationsCodes(data);
    }

    clear = () => {
        this.meditations = [];
        this.meditationsCodes = [];
    }

}

export const meditationModel = new MeditationModel(storage);
