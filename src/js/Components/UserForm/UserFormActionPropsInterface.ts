import {User, UserState} from '../../Interfaces/Redux';

export interface UserFormActionPropsInterface {
    userState: UserState,
    createUserAction(user: User): void;
    updateUserAction(user: User): void;
}
