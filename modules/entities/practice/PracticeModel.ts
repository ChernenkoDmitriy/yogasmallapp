import { MobXRepository } from "../../../src/repository/MobXRepository";
import { IPractice } from "./IPractice";

export interface IPracticeModel {
    practices: IPractice[];
    chosenPractice: IPractice | null;
}

class PracticeModel implements IPracticeModel {
    private practicesRepository = new MobXRepository<IPractice[]>([]);
    private chosenPracticeRepository = new MobXRepository<IPractice | null>(null);

    get practices() {
        return this.practicesRepository.data || [];
    }

    set practices(data: IPractice[]) {
        this.practicesRepository.save(data);
    }

    get chosenPractice() {
        return this.chosenPracticeRepository.data || null;
    }

    set chosenPractice(data: IPractice | null) {
        this.chosenPracticeRepository.save(data);
    }

    clear = () => {
        this.practices = [];
        this.chosenPractice = null;
    }

}

export const practiceModel = new PracticeModel();
