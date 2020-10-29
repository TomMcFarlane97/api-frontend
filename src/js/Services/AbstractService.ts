import axios, { AxiosRequestConfig, AxiosStatic } from 'axios'
import { CONTENT_TYPE_JSON } from '../Constants/AxiosConstants';

export abstract class AbstractService
{
    protected readonly http: AxiosStatic;

    constructor() {
        this.http = this.setHttp();
    }

    private setHttp(): AxiosStatic {
        axios.interceptors.request.use((config: AxiosRequestConfig) => {
            return {
                ...config,
                headers: {
                    'Content-Type': CONTENT_TYPE_JSON,
                    'Accept': CONTENT_TYPE_JSON,
                },
                baseURL: 'http://localhost:8080/'
            }
        });

        return axios;
    }
}
