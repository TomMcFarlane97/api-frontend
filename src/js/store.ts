import { createStore } from 'redux';
import rootReducer from "./Redux/Reducers/index";

export const store =  createStore(rootReducer);
