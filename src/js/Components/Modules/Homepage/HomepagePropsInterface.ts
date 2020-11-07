import { User, UserState } from '../../../Interfaces/Redux';

export interface HomepagePropsInterface {
    userState: UserState,
    getUserAction(): void;
    createUserAction(user: User): void;
}
