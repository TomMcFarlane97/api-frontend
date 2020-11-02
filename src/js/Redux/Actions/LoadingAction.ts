import { LoadingState } from "../../Interfaces/Redux";
import {GLOBAL_LOADING} from "../../Constants/ActionTypes/LoadingActionTypes";

export function requestLoadingAction(isLoading: boolean): LoadingState {
    return {
        type: GLOBAL_LOADING,
        loading: isLoading,
    } as LoadingState;
}
