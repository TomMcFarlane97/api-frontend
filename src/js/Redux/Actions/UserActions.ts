import { User, UserState } from '../../Interfaces/Redux';
import {USER_SUCCESS} from '../../Constants/ActionTypes/UserActionTypes';
import { UserService } from "../../Services/UserService";
import {Dispatch} from "react";
import {UserServiceInterface} from "../../Interfaces/Services";
import {requestLoadingAction} from "./LoadingAction";
import {refreshTokensAction} from "./AuthenticationActions";

const userService: UserServiceInterface = new UserService();

export function getUserAction(): (dispatch: Dispatch<any>) => void {
    return function (dispatch: Dispatch<any>): void {
        dispatch(requestLoadingAction(true));
        userService.fetchUser()
            .then((response: User) => {
                dispatch({
                    type: USER_SUCCESS,
                    user: response,
                } as UserState);
                dispatch(requestLoadingAction(false));
            });
    }
}

export function createUserAction(user: User): (dispatch: Dispatch<any>) => void {
    return function (dispatch: Dispatch<any>): void {
        dispatch(requestLoadingAction(true));
        userService.createUser(user)
            .then((response: User) => {
                dispatch({
                    type: USER_SUCCESS,
                    user: response,
                } as UserState);

                dispatch(requestLoadingAction(false));
            }).catch((error: any) => {
                alert('check console logs sending refresh token');
                console.log(error);
                refreshTokensAction();
        });
    }
}

export function updateUserAction(user: User): (dispatch: Dispatch<any>) => void {
    return function (dispatch: Dispatch<any>): void {
        dispatch(requestLoadingAction(true));
        userService.updateUser(user)
            .then((response: User) => {
                dispatch({
                    type: USER_SUCCESS,
                    user: response,
                } as UserState);
                dispatch(requestLoadingAction(false));
            });
    }
}

