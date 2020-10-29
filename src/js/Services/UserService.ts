import { AxiosResponse } from 'axios';
import { User } from '../Interfaces/Redux';
import { AbstractService } from './AbstractService';

export class UserService extends AbstractService
{
    public fetchUser(userId: number): Promise<User|void> {
        return this.httpRequest.get('/user')
            .then(((response: AxiosResponse) => {
                console.log(response);
            }));
    }
}
