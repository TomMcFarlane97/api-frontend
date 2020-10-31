import { LoadingState } from '../../Interfaces/Redux';
import {GLOBAL_LOADING} from "../../Constants/ActionTypes/LoadingActionTypes";

const initialState: LoadingState = {
    type: GLOBAL_LOADING,
    loading: false,
};

export default (state: LoadingState = initialState, action: LoadingState): LoadingState => {
    switch (action.type) {
        case GLOBAL_LOADING: {
            return {
                type: GLOBAL_LOADING,
                loading: action.loading,
            };
        }
        default:
            return state;
    }
};
