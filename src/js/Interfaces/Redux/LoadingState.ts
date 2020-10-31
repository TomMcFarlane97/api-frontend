import {GLOBAL_LOADING} from "../../Redux/Actions/Types/LoadingActionTypes";

export interface LoadingState {
    type: typeof GLOBAL_LOADING,
    loading: boolean,
}
