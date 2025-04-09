import Axios from "axios";
import { IRequester } from ".";

class AxiosRequester implements IRequester {
    private queue: any[] = [];
    private busy: boolean = false;

    requestQueue = async (method: 'POST' | 'GET', url: string, data?: object, headers?: object, timeoutMS?: number): Promise<any> => {
        return new Promise((resolve, reject) => {
            this.queue.push({ method, url, data, headers, timeoutMS, resolve, reject });
            if (!this.busy) {
                this.processQueue();
            }
        });
    };

    private processQueue = async () => {
        this.busy = true;
        while (this.queue.length > 0) {
            const request = this.queue.shift();
            try {
                if (request?.method === 'GET') {
                    const response = await this.get(request.url, request.data, request.headers, request.timeoutMS);
                    request.resolve(response);
                } else if (request?.method === 'POST') {
                    const response = await this.post(request.url, request.data, request.headers, request.timeoutMS);
                    request.resolve(response);
                }
            } catch (error) {
                request.reject(error);
            }
        }
        this.busy = false;
    };

    private serverError = (status: number) => {
        if (status >= 500) {
            // Toast.show({ type: 'error', text1: 'Error', text2: 'Server error', visibilityTime: 2000, });
        }
    }

    postFormData = async (url: string, data: FormData) => {
        try {
            const response = await fetch(url, {
                method: 'POST',
                // headers: { 'Accept': '*/*', 'Content-Type': 'multipart/form-data', 'authorization': `Bearer ${userModel?.token}` },
                body: data,
            });
            const result = await response.json()
            return { data: result, status: response.status };
        } catch (error: any) {
            this.serverError(error?.status);
            console.warn('AxiosRequester -> postFormData: ', error);
            return error?.response || {};
        }
    }

    post = async (url: string, data?: object, headers?: object, timeoutMS?: number): Promise<any> => {
        try {
            const config: any = {
                method: 'POST',
                headers: {
                    'Cache-Control': 'no-cache',
                    'Content-Type': 'application/json',
                    'x-api-key': 'test'
                },
                url,
                timeout: timeoutMS || 60000
            };
            headers && (config.headers = headers);
            data && (config.data = data);
            const response = await Axios(config);
            return response;
        } catch (error: any) {
            this.serverError(error?.status);
            console.warn('AxiosRequester -> post: ', error);
            return error?.response || {};
        }
    }

    delete = async (url: string, data?: object, headers?: object, timeoutMS?: number): Promise<any> => {
        try {
            const config: any = {
                method: 'DELETE',
                headers: {
                    'Cache-Control': 'no-cache',
                    'Content-Type': 'application/json',
                    // 'authorization': `Bearer ${userModel?.token}`
                },
                url,
                timeout: timeoutMS || 60000
            };
            headers && (config.headers = headers);
            data && (config.data = JSON.stringify(data));
            const response = await Axios(config);
            return response;
        } catch (error: any) {
            this.serverError(error?.status);
            console.warn('AxiosRequester -> post: ', error);
            return error?.response || {};
        }
    }

    get = async (url: string, params?: object, headers?: object, timeoutMS?: number): Promise<any> => {
        try {
            const config: any = {
                method: 'GET',
                headers: {
                    'Cache-Control': 'no-cache',
                    'Content-Type': 'application/json',
                    // 'authorization': `Bearer ${userModel?.token}`
                },
                url,
                timeout: timeoutMS || 60000
            };
            headers && (config.headers = headers);
            params && (config.params = params);
            const response = await Axios(config);
            return response;
        } catch (error: any) {
            this.serverError(error?.status);
            console.warn('AxiosRequester -> get: ', error);
            return error?.response || {};
        }
    }

}

export const requester = new AxiosRequester();
