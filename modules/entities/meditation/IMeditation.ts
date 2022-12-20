export interface IMeditation {
    id: number;
    dayNumber?: string;
    title: string;
    banner?: string;
    description: string;
    duration: number;
    accessCode: string[];
    durationMeasuring: 'minutes' | 'hours' | 'days';
    lessonTitle: string;
    lessonContent: string[];
    media: { uri: string; type: 'audio' | 'video' };
    availableDays: number;
    startDate: string;
    isAvailable: boolean;
}