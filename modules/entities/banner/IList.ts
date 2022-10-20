export interface IList<T> {
    data: T[];
    links: {
        first: string;
        last: string;
        prev: null | string;
        next: null | string;
    };
    meta: {
        current_page: number;
        last_page: number;
        path: string;
        per_page: number;
        total: number;
    };
};
