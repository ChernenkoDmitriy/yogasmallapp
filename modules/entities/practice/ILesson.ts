import { IDay } from "./IDay";

export interface ILesson {
    id: string;
    section: 'practice' | 'meditation'; // can not be
    title: string;
    description: string;
    image: string;
    dates: {
        start: string;
        finish?: string;
    };
    days: IDay[];
    isAvailable: boolean;
}