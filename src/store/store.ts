import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { reducer } from './reducers';

export const rootReducer = combineReducers({
  store: reducer
});

export const store = configureStore({
  reducer: rootReducer
});