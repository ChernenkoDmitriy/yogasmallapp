export interface IMeditation {
    id: number;
    title: string;
    banner?: string;
    description: string;
    duration: number;
    accessCode: string;
    durationMeasuring: 'minutes' | 'hours' | 'days';
    lessonTitle: string;
    lessonContent: string[];
    media: { uri: string; type: 'audio' | 'video' };
    availableDays: number;
    startDate: number;
    isAvailable: boolean;
}