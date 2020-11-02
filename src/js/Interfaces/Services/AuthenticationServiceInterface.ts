import {Authentication} from "../Redux";

export interface AuthenticationServiceInterface {
    login(emailAddress: string): Promise<Authentication>
    refresh(refreshToken: string): Promise<Authentication>
    logout(): Authentication
}
