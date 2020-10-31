import { User } from '../../Interfaces/Redux';

export interface UserFormPropsInterface {
    user?: User,
    submitUserData(user?: User): void;
}
