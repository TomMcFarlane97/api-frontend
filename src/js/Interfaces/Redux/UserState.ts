import { User } from './User';
import { CREATE_USER, GET_USER } from '../../Redux/Actions/Types/UserActionTypes';

export interface UserState {
    type: typeof CREATE_USER | typeof GET_USER,
    data: User,
}
