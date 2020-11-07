import {User} from '../Redux';

export interface UserServiceInterface {
    fetchUser(): Promise<User>
    createUser(user: User): Promise<User>
    updateUser(user: User): Promise<User>
}
