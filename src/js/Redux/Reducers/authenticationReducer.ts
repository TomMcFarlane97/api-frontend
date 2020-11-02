import {Authentication, AuthenticationState} from '../../Interfaces/Redux';
import {CLEAR_TOKENS, SET_TOKENS} from "../../Constants/ActionTypes/TokenActionTypes";

const initialState: AuthenticationState = {
    type: CLEAR_TOKENS,
    data: {
        bearer: '',
        refresh: '',
        loggedIn: false,
    } as Authentication,
};

export default (state: AuthenticationState = initialState, action: AuthenticationState): AuthenticationState => {
    switch (action.type) {
        case SET_TOKENS: {
            const { data } = action;
            return {
                type: SET_TOKENS,
                data: {
                    ...data,
                },
            };
        }
        case CLEAR_TOKENS: {
            return {
                ...state,
                type: CLEAR_TOKENS,
                data: {
                    bearer: '',
                    refresh: '',
                    loggedIn: false,
                } as Authentication,
            };
        }
        default:
            return state;
    }
};
