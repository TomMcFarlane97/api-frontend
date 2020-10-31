import { UserState } from '../../Interfaces/Redux';
import {USER_FAILURE, USER_SUCCESS, USER_DEFAULT} from '../../Constants/ActionTypes/UserActionTypes';

const initialState: UserState = {
  type: USER_DEFAULT,
  user: {
    id: undefined,
    firstName: '',
    lastName: '',
    emailAddress: '',
  },
};

export default (state: UserState = initialState, action: UserState): UserState => {
  switch (action.type) {
    case USER_SUCCESS: {
      const { user } = action;
      return {
        type: USER_SUCCESS,
        user,
      };
    }
    case USER_FAILURE: {
      return {
        ...state,
        type: USER_FAILURE,
      };
    }
    default:
      return state;
  }
};
