import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from "./Redux/Reducers/index";
import thunk from 'redux-thunk';

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store =  createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(thunk),
    )
);
