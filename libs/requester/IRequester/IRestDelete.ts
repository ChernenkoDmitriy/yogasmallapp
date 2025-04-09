export interface IRestDelete {
    delete: (url: string, params?: object, headers?: object,  timeoutMS?: number) => Promise<Response>;
}