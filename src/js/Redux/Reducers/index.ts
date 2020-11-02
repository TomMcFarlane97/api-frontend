import { combineReducers } from 'redux';
import authenticationReducer from './authenticationReducer';
import loadingState from './loadingReducer';
import userState from './userReducer';

export default combineReducers({ authenticationReducer, loadingState, userState });
