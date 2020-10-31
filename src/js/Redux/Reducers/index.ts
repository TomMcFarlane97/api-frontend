import { combineReducers } from 'redux';
import loadingState from './loadingReducer';
import userState from './userReducer';

export default combineReducers({ loadingState, userState });
