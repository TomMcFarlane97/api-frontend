import { User, UserState } from '../../Interfaces/Redux';
import { CREATE_USER, GET_USER } from './Types/UserActionTypes';
import { UserService } from "../../Services/UserService";

export default class UserActions
{
    private static userService: any;

    public static getUser(userId: number): UserState {
        let user = this.getUserService().fetchUser(userId);
        console.log(user, 'UserAction.getUser');
        return {
            type: GET_USER,
            data: {
                id: 1,
                firstName: 'Tom',
                lastName: 'McFarlane',
                emailAddress: 'tom.mcfarlane@gmail.com',
            } as User,
        }
    }

    public static createUser(user: User): UserState {
        return {
            type: CREATE_USER,
            data: user,
        }
    }

    private static getUserService(): UserService {
        if (this.userService) {
            return this.userService;
        }
        this.userService = new UserService();
        return this.userService;
    }
}
