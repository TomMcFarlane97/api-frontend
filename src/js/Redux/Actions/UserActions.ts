import { User, UserState } from '../../Interfaces/Redux';
import { CREATE_USER, GET_USER } from './Types/UserActionTypes';
import { UserService } from "../../Services/UserService";
import {Dispatch} from "react";
import {UserServiceInterface} from "../../Interfaces/Services";

const userService: UserServiceInterface = new UserService();

export function getUser(userId: number): (dispatch: Dispatch<any>) => void {
    return function (dispatch: Dispatch<any>): void {
        userService.fetchUser(userId)
            .then((response: User) => {
                dispatch({
                    type: GET_USER,
                    data: response,
                } as UserState)
            });
    }
}

export function createUser(user: User): (dispatch: Dispatch<any>) => void {
    console.log('dispatching createUser');
    return function (dispatch: Dispatch<any>): void {
        console.log('dispatching create action');
        userService.createUser(user)
            .then((response: User) => {
                console.log(response);
                dispatch({
                    type: CREATE_USER,
                    data: response,
                } as UserState)
            });
    }
}

