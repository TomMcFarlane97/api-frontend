import { User } from './User';
import {USER_DEFAULT, USER_FAILURE, USER_SUCCESS} from '../../Redux/Actions/Types/UserActionTypes';

export interface UserState {
    type: typeof USER_SUCCESS | typeof USER_FAILURE | typeof USER_DEFAULT,
    user: User,
}
