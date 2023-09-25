import { combineReducers, configureStore } from "@reduxjs/toolkit";
import profileSelectedReducer from "../reducer/profile";

const rootReducer = combineReducers({
  profile: profileSelectedReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
