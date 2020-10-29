import { combineReducers } from 'redux';
import user from './userReducer';
import {User} from "../../Interfaces/Redux";

export default combineReducers({ user });
