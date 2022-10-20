export interface IDay {
    id: string;
    hours_to_spend: number;
    audio?: string;
    video?: string;
    tasks: {
        title: string;
        points: string[];
    };
}