import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { localStore } from "./localStore";

import { reducer } from './reducers';


export const rootReducer = combineReducers({
  store: reducer
});

export const store = configureStore({
  reducer: rootReducer
});


store.subscribe(() => {
  localStore.setLikedCats(store.getState().store.likedCats);
});

