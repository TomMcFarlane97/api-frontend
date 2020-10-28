import { User } from '../Interfaces/Redux';

export interface AppPropsInterface {
    user: User,
    getUser(userId: number): void;
    createUser(user: User): void;
}
