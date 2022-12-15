import { IMeditation } from "../meditation/IMeditation";

export interface IPractice {
    id: number;
    title: string;
    description: string;
    duration: number;
    accessCode: string[];
    durationMeasuring: 'minutes' | 'hours' | 'days';
    availableDays: number;
    startDate: string;
    content: IMeditation[];
}