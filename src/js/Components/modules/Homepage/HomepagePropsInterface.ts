import { User, UserState } from '../../../Interfaces/Redux';

export interface HomepagePropsInterface {
    userState: UserState,
    getUserAction(userId: number): void;
    createUserAction(user: User): void;
}
