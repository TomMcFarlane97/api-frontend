import { LoadingState } from "../../Interfaces/Redux";
import {GLOBAL_LOADING} from "./Types/LoadingActionTypes";

export function requestLoading(isLoading: boolean): LoadingState {
    return {
        type: GLOBAL_LOADING,
        loading: isLoading,
    } as LoadingState;
}
