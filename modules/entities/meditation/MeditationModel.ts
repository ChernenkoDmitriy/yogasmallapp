import { MobXRepository } from "../../../src/repository/MobXRepository";
import { IMeditation } from "./IMeditation";

export interface IMeditationModel {
    meditations: IMeditation[] | null;
    chosenMeditations: IMeditation | null;
}

class MeditationModel implements IMeditationModel {
    private meditationsRepository = new MobXRepository<IMeditation[]>([]);
    private chosenMeditationsRepository = new MobXRepository<IMeditation | null>(null);

    get meditations() {
        return this.meditationsRepository.data || null;
    }

    set meditations(data: IMeditation[] | null) {
        this.meditationsRepository.save(data);
    }

    get chosenMeditations() {
        return this.chosenMeditationsRepository.data || null;
    }

    set chosenMeditations(data: IMeditation | null) {
        this.chosenMeditationsRepository.save(data);
    }

    clear = () => {
        this.meditations = [];
        this.chosenMeditations = null;
    }

}

export const meditationModel = new MeditationModel();
