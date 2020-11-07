import axios, { AxiosRequestConfig, AxiosResponse, AxiosStatic } from 'axios'
import { CONTENT_TYPE_JSON } from '../Constants/AxiosConstants';
import {refreshTokensAction} from "../Redux/Actions/AuthenticationActions";
import {store} from "../store";

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
                    Accept: CONTENT_TYPE_JSON,
                    Cookie: 'Phpstorm-656e7542=41f2b1fa-0d4c-4293-9f9e-efdc8ce48500; XDEBUG_SESSION=PHPSTORM', // @todo - remove,
                    Origin: 'http://localhost:3000',
                    Authorization: `Bearer ${store.getState().authenticationState.data.bearer}`
                },
                withCredentials: true, // @todo - remove
                baseURL: 'http://localhost:8080/'
            }
        });

        axios.interceptors.response.use((response: AxiosResponse) => {
            alert('successful call');
            return response;
        }, (error: any) => {
                if (error.response.status === 401) {
                    alert('sending for refresh tokens');
                    refreshTokensAction();
                }
                alert('error');
                return error;
            }
        );
        return axios;
    }
}
