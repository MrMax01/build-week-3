import { combineReducers, configureStore } from "@reduxjs/toolkit";
import profileSelectedReducer from "../reducer/profile";
import myProfileReducer from "../reducer/myProfile";
import loadingReducer from "../reducer/loadingReducer";
import errorReducer from "../reducer/errorReducer";
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
