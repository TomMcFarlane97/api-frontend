import {Authentication, AuthenticationState, User} from '../../Interfaces/Redux';
import {Dispatch} from "react";
import {AuthenticationServiceInterface} from "../../Interfaces/Services";
import {requestLoadingAction} from "./LoadingAction";
import {AuthenticationService} from "../../Services/AuthenticationService";
import {CLEAR_TOKENS, SET_TOKENS} from "../../Constants/ActionTypes/TokenActionTypes";
import {store} from "../../store";

const authenticationService: AuthenticationServiceInterface = new AuthenticationService();

export function loginAction(emailAddress: string): (dispatch: Dispatch<any>) => void {
    return function (dispatch: Dispatch<any>): void {
        dispatch(requestLoadingAction(true));
        authenticationService.login(emailAddress)
            .then((response: Authentication) => {
                dispatch({
                    type: SET_TOKENS,
                    data: response,
                } as AuthenticationState);
                dispatch(requestLoadingAction(false));
            }).catch((error: any) => {
                alert('check console logs');
                console.log(error);
                dispatch(requestLoadingAction(false));
            });
    }
}

export function refreshTokensAction(): (dispatch: Dispatch<any>) => void {
    alert('about to refresh');
    return function (dispatch: Dispatch<any>): void {
        alert('refreshing');
        dispatch(requestLoadingAction(true));
        authenticationService.refresh(store.getState().authenticationReducer.data.refresh)
            .then((response: Authentication) => {
                alert('success');
                dispatch({
                    type: SET_TOKENS,
                    data: response,
                } as AuthenticationState);
                dispatch(requestLoadingAction(false));
            }).catch((error: any) => {
            alert('error');
            alert('check console logs');
            console.log(error);
            dispatch(requestLoadingAction(false));
        });

        alert('done');
    }
}

export function logoutAction(user: User): (dispatch: Dispatch<any>) => void {
    return function (dispatch: Dispatch<any>): void {
        dispatch(requestLoadingAction(true));
        dispatch({
            type: CLEAR_TOKENS,
            data: authenticationService.logout(),
        } as AuthenticationState);
        dispatch(requestLoadingAction(false));
    }
}

