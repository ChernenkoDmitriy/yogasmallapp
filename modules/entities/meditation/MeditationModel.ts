import { IStorage, storage } from "../../../libs/storage";
import { MobXRepository } from "../../../src/repository/MobXRepository";
import { IAccessCode } from "./IAccessCode";
import { IMeditation } from "./IMeditation";

export interface IMeditationModel {
    meditations: IMeditation[] | null;
    accessCodes: IAccessCode[];
}

class MeditationModel implements IMeditationModel {
    private meditationsRepository = new MobXRepository<IMeditation[]>([]);
    private accessCodesRepository = new MobXRepository<IAccessCode[]>([]);

    constructor(private storage: IStorage) {
        this.load();
    }

    private persistMeditationsCodes = (data: IAccessCode[]) => {
        if (data) {
            this.storage.set('MEDITATIONS_CODES', data);
        } else {
            this.storage.remove('MEDITATIONS_CODES');
        }
    }

    private load = () => {
        this.storage.get('MEDITATIONS_CODES')
            .then(data => { data && this.accessCodesRepository.save(data) })
            .catch(error => console.warn('MeditationModel -> load: ', error));
    }

    get meditations() {
        return this.meditationsRepository.data || null;
    }

    set meditations(data: IMeditation[] | null) {
        this.meditationsRepository.save(data);
    }

    get accessCodes() {
        return this.accessCodesRepository.data || [];
    }

    set accessCodes(data: IAccessCode[]) {
        this.accessCodesRepository.save(data);
        this.persistMeditationsCodes(data);
    }

    clear = () => {
        this.meditations = [];
        this.accessCodes = [];
    }

}

export const meditationModel = new MeditationModel(storage);
