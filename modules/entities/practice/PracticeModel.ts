import { MobXRepository } from "../../../src/repository/MobXRepository";
import { IList } from "../banner/IList";
import { ILesson } from "./ILesson";

export interface IPracticeModel {
    currentLesson: ILesson | null;
    lessonsList: IList<ILesson> | null;
}

class PracticeModel implements IPracticeModel {
    private currentLessonRepository = new MobXRepository<ILesson | null>(null);
    private lessonsListRepository = new MobXRepository<IList<ILesson> | null>(null);

    get currentLesson() {
        return this.currentLessonRepository.data || null;
    }

    set currentLesson(data: ILesson | null) {
        this.currentLessonRepository.save(data);
    }
    
    get lessonsList() {
        return this.lessonsListRepository.data || null;
    }

    set lessonsList(data: IList<ILesson> | null) {
        this.lessonsListRepository.save(data);
    }

    clear = () => {
        this.currentLesson = null;
        this.lessonsList = null;
    }

}

export const practiceModel = new PracticeModel();
