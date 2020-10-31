import { User, UserState } from '../../Interfaces/Redux';
import {USER_SUCCESS} from './Types/UserActionTypes';
import { UserService } from "../../Services/UserService";
import {Dispatch} from "react";
import {UserServiceInterface} from "../../Interfaces/Services";
import {requestLoading} from "./LoadingAction";

const userService: UserServiceInterface = new UserService();

export function getUser(userId: number): (dispatch: Dispatch<any>) => void {
    return function (dispatch: Dispatch<any>): void {
        dispatch(requestLoading(true));
        userService.fetchUser(userId)
            .then((response: User) => {
                dispatch({
                    type: USER_SUCCESS,
                    user: response,
                } as UserState);
                dispatch(requestLoading(false));
            });
    }
}

export function createUser(user: User): (dispatch: Dispatch<any>) => void {
    return function (dispatch: Dispatch<any>): void {
        dispatch(requestLoading(true));
        userService.createUser(user)
            .then((response: User) => {
                dispatch({
                    type: USER_SUCCESS,
                    user: response,
                } as UserState);

                dispatch(requestLoading(false));
            });
    }
}

export function updateUser(user: User): (dispatch: Dispatch<any>) => void {
    return function (dispatch: Dispatch<any>): void {
        dispatch(requestLoading(true));
        userService.updateUser(user)
            .then((response: User) => {
                dispatch({
                    type: USER_SUCCESS,
                    user: response,
                } as UserState);
                dispatch(requestLoading(false));
            });
    }
}

