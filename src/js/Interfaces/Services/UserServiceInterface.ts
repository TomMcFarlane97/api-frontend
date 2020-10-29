import {User} from '../Redux';

export interface UserServiceInterface {
    fetchUser(userId: number): Promise<User>
    createUser(user: User): Promise<User>
}
