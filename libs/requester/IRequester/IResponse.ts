export interface IResponse<T> {
    isError: boolean;
    message: string | { [key: string]: string };
    data: T;
}