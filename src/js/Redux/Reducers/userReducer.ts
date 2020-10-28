import { User, UserState } from '../../Interfaces/Redux';
import {CREATE_USER, GET_USER} from '../Actions/Types/UserActionTypes';

const initialState: User = {
  id: undefined,
  firstName: '',
  lastName: '',
  emailAddress: '',
};

export default (state: User = initialState, action: UserState) => {
  switch (action.type) {
    case CREATE_USER: {
      console.log('create user in reducer');
      const { id, firstName, lastName, emailAddress } = action.data;
      return {
        ...state,
        id,
        firstName,
        lastName,
        emailAddress,
      };
    }
    case GET_USER: {
      console.log('got user in reducer');
      const { id, firstName, lastName, emailAddress } = action.data;
      return {
        ...state,
        id,
        firstName,
        lastName,
        emailAddress,
      };
    }
    default:
      return state;
  }
};
