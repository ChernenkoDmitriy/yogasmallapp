export interface IRestPut {
    put: (url: string, params?: object, headers?: object,  timeoutMS?: number) => Promise<Response>;
}