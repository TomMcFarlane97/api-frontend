import { User, UserState } from '../../Interfaces/Redux';
import {USER_FAILURE, USER_SUCCESS} from '../Actions/Types/UserActionTypes';

const initialState: User = {
  id: undefined,
  firstName: '',
  lastName: '',
  emailAddress: '',
};

export default (state: User = initialState, action: UserState): User => {
  switch (action.type) {
    case USER_SUCCESS: {
      const { id, firstName, lastName, emailAddress } = action.data;
      return {
        id,
        firstName,
        lastName,
        emailAddress,
      };
    }
    case USER_FAILURE: {
      const { id, firstName, lastName, emailAddress } = action.data;
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};
