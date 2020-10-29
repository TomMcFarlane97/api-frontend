import {AxiosResponse, AxiosStatic} from 'axios';
import {User} from '../Interfaces/Redux';
import {AbstractService} from './AbstractService';
import {UserResponse} from '../Interfaces/Responses';
import {UserServiceInterface} from '../Interfaces/Services';

export class UserService extends AbstractService implements UserServiceInterface
{
    public async fetchUser(userId: number): Promise<User> {
        return await this.http.get(`/user/${userId}`)
            .then((response: AxiosResponse<UserResponse>) => {
                return {
                    id: response.data.id,
                    firstName: response.data.first_name,
                    lastName: response.data.last_name,
                    emailAddress: response.data.email_address,
                } as User;
            });
    }

    public async createUser(user: User): Promise<User> {
        const { firstName, lastName, emailAddress } = user;
        return await this.http.post(
            `/user`,
            {
                    first_name: firstName,
                    last_name: lastName,
                    email_address: emailAddress,
                 }
            )
            .then((response: AxiosResponse<UserResponse>) => {
                return {
                    id: response.data.id,
                    firstName: response.data.first_name,
                    lastName: response.data.last_name,
                    emailAddress: response.data.email_address,
                } as User;
            });
    }
}
