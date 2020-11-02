import { Authentication } from ".";
import {CLEAR_TOKENS, SET_TOKENS} from "../../Constants/ActionTypes/TokenActionTypes";

export interface AuthenticationState {
    type: typeof SET_TOKENS | typeof CLEAR_TOKENS;
    data: Authentication;
}
