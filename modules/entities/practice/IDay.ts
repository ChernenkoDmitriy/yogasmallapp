export interface IDay {
    id: string;
    hours: number;
    audio?: string;
    video?: string;
    tasks: {
        title: string;
        points: string[];
    };
}