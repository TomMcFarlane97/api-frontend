import { User, UserState } from '../Interfaces/Redux';
import { Dispatch } from 'react';

export interface AppPropsInterface {
    user: User,
    getUserAction(userId: number): void;
    createUserAction(user: User): void;
}
