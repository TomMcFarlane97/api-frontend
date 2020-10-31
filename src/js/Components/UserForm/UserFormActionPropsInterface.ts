import { User } from '../../Interfaces/Redux';

export interface UserFormActionPropsInterface {
    user?: User,
    createUserAction(user: User): void;
    updateUserAction(user: User): void;
}
