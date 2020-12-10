import { combineReducers } from 'redux';

import { apiReducer } from './apiReducer';

//combining all reducers into one
//as the key/value pairs are the same, this object can just be separated by commas
//this rootReducer is what is being passed into the store.
export const rootReducer = combineReducers({
    apiReducer
})