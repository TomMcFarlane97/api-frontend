import { combineReducers } from 'redux';
import authenticationState from './authenticationReducer';
import loadingState from './loadingReducer';
import userState from './userReducer';

export default combineReducers({ authenticationState, loadingState, userState });
