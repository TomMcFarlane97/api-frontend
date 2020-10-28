import { User, UserState } from '../../Interfaces/Redux';
import { CREATE_USER, GET_USER } from './Types/UserActionTypes';

export default class UserActions
{
    public static getUser(userId: number): UserState {
        return {
            type: GET_USER,
            data: {
                id: userId,
                firstName: 'Tom',
                lastName: 'McFarlane',
                emailAddress: 'tom.mcfarlane97@gmail.com',
            } as User,
        }
    }

    public static createUser(user: User): UserState {
        return {
            type: CREATE_USER,
            data: user,
        }
    }
}
