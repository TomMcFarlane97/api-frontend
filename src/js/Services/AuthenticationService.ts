import axios, {AxiosRequestConfig, AxiosResponse, AxiosStatic} from 'axios';
import {Authentication} from '../Interfaces/Redux';
import {AbstractService} from './AbstractService';
import {AuthenticationResponse} from '../Interfaces/Responses';
import {AuthenticationServiceInterface} from '../Interfaces/Services';
import {CONTENT_TYPE_JSON} from "../Constants/AxiosConstants";

export class AuthenticationService implements AuthenticationServiceInterface
{
    public async login(emailAddress: string): Promise<Authentication> {
        return await this.getSimpleHttp().post(
            `/authentication/`,
            {
                email_address: emailAddress,
            })
            .then((response: AxiosResponse<AuthenticationResponse>) => {
                const { bearer, refresh } = response.data;
                return {
                    bearer,
                    refresh,
                    loggedIn: true,
                } as Authentication
            })
            .catch((reason: any) => {
                console.log(reason);
                alert('check console log');
                return {
                    bearer: '',
                    refresh: '',
                    loggedIn: false,
                } as Authentication;
            });
    }

    public async refresh(refreshToken: string): Promise<Authentication> {
        return await this.getSimpleHttp(refreshToken).post(`/authentication`)
            .then((response: AxiosResponse<AuthenticationResponse>) => {
                const { bearer, refresh } = response.data;
                return {
                    bearer,
                    refresh,
                    loggedIn: true,
                } as Authentication
            })
            .catch((reason: any) => {
                console.log(reason);
                alert('check console log');
                return {
                    bearer: '',
                    refresh: '',
                    loggedIn: false,
                } as Authentication;
            });
    }

    public logout(): Authentication {
        return {
            bearer: '',
            refresh: '',
            loggedIn: false,
        } as Authentication;
    }

    protected getSimpleHttp(refreshToken: string = ''): AxiosStatic {
        axios.interceptors.request.use((config: AxiosRequestConfig) => {
            return {
                ...config,
                headers: {
                    'Content-Type': CONTENT_TYPE_JSON,
                    Accept: CONTENT_TYPE_JSON,
                    Cookie: 'Phpstorm-656e7542=41f2b1fa-0d4c-4293-9f9e-efdc8ce48500; XDEBUG_SESSION=PHPSTORM', // @todo - remove
                    Authorization: refreshToken ? `Bearer ${refreshToken}` : '',
                },
                withCredentials: true, // @todo - remove
                baseURL: 'http://localhost:8080/'
            }
        });

        return axios;
    }
}
