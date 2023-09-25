import { combineReducers, configureStore } from "@reduxjs/toolkit";
import profileSelectedReducer from "../reducers/profile";
import myProfileReducer from "../reducers/myProfile";
import loadingReducer from "../reducers/loadingReducer";
import errorReducer from "../reducers/errorReducer";
import personeAsideReducer from "../reducers/aside";

const rootReducer = combineReducers({
  profile: profileSelectedReducer,
  myProfile: myProfileReducer,
  loading: loadingReducer,
  error: errorReducer,
  aside: personeAsideReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
