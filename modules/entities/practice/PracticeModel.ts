import { IStorage, storage } from "../../../libs/storage";
import { MobXRepository } from "../../../src/repository/MobXRepository";
import { IAccessCode } from "../meditation/IAccessCode";
import { IPractice } from "./IPractice";

export interface IPracticeModel {
    practices: IPractice[] | null;
    accessCodes: IAccessCode[];
};

class PracticeModel implements IPracticeModel {
    private practicesRepository = new MobXRepository<IPractice[]>([]);
    private accessCodesRepository = new MobXRepository<IAccessCode[]>([]);

    constructor(private storage: IStorage) {
        this.load();
    }

    private persistPracticesCodes = (data: IAccessCode[]) => {
        if (data) {
            this.storage.set('PRACTICES_CODES', data);
        } else {
            this.storage.remove('PRACTICES_CODES');
        }
    }

    private load = () => {
        this.storage.get('PRACTICES_CODES')
            .then(data => { data && this.accessCodesRepository.save(data) })
            .catch(error => console.warn('PracticeModel -> load: ', error));
    }
    get practices() {
        return this.practicesRepository.data || [];
    }

    set practices(data: IPractice[] | null) {
        this.practicesRepository.save(data);
    }

    get accessCodes() {
        return this.accessCodesRepository.data || [];
    }

    set accessCodes(data: IAccessCode[]) {
        this.accessCodesRepository.save(data);
        this.persistPracticesCodes(data);
    }

    clear = () => {
        this.practices = [];
        this.accessCodes = [];
    }

}

export const practiceModel = new PracticeModel(storage);