import {GLOBAL_LOADING} from "../../Constants/ActionTypes/LoadingActionTypes";

export interface LoadingState {
    type: typeof GLOBAL_LOADING,
    loading: boolean,
}
