import { combineReducers, configureStore } from "@reduxjs/toolkit";
import personeAsideReducer from "../reducers/aside";

const rootReducer = combineReducers({
  aside: personeAsideReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
