import axios, { AxiosRequestConfig, AxiosStatic } from 'axios'
import { CONTENT_TYPE_JSON } from '../Constants/AxiosConstants';

export abstract class AbstractService
{
    private readonly httpResponse: AxiosStatic;

    constructor() {
        this.httpResponse = this.setHttpResponse();
    }

    protected get httpRequest() {
        return this.httpResponse;
    }

    // protected getHttpResponse() {
    //     if (this.httpResponse !== null) {
    //         return this.httpRequest;
    //     }
    //     // axios.
    // }

    private setHttpResponse(): AxiosStatic {
        axios.interceptors.request.use((config: AxiosRequestConfig) => {
            return {
                ...config,
                headers: {
                    // 'Content-Type': CONTENT_TYPE_JSON,
                    'Accept': CONTENT_TYPE_JSON,
                },
                baseURL: 'http://localhost:8080/'
            }
        });

        return axios;
    }
}
