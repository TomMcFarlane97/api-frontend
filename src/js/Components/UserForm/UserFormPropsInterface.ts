import { User } from '../../Interfaces/Redux';

export interface UserFormPropsInterface {
    user?: User,
    isRequestLoading: boolean,
    submitUserData(user?: User): void;
}
