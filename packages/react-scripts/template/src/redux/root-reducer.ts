import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { countersReducer } from '@src/components/counters';

// combine all reducers inside app
export const rootReducer = combineReducers({
    reduxCounter: countersReducer,
    router: routerReducer,
});