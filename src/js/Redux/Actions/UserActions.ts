import { User, UserState } from '../../Interfaces/Redux';
import {USER_SUCCESS, USER_FAILURE} from './Types/UserActionTypes';
import { UserService } from "../../Services/UserService";
import {Dispatch} from "react";
import {UserServiceInterface} from "../../Interfaces/Services";

const userService: UserServiceInterface = new UserService();

export function getUser(userId: number): (dispatch: Dispatch<any>) => void {
    return function (dispatch: Dispatch<any>): void {
        userService.fetchUser(userId)
            .then((response: User) => {
                dispatch({
                    type: USER_SUCCESS,
                    data: response,
                } as UserState)
            });
    }
}

export function createUser(user: User): (dispatch: Dispatch<any>) => void {
    return function (dispatch: Dispatch<any>): void {
        userService.createUser(user)
            .then((response: User) => {
                dispatch({
                    type: USER_SUCCESS,
                    data: response,
                } as UserState)
            });
    }
}

export function updateUser(user: User): (dispatch: Dispatch<any>) => void {
    return function (dispatch: Dispatch<any>): void {
        userService.updateUser(user)
            .then((response: User) => {
                dispatch({
                    type: USER_SUCCESS,
                    data: response,
                } as UserState)
            });
    }
}

