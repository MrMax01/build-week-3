import { combineReducers, configureStore } from "@reduxjs/toolkit";
import profileSelectedReducer from "../reducers/profile";
import myProfileReducer from "../reducers/myProfile";
import loadingReducer from "../reducers/loadingReducer";
import errorReducer from "../reducers/errorReducer";
import personeAsideReducer from "../reducers/aside";
import experienceReducer from "../reducers/experience";
import updatedReducer from "../reducers/updated";
import experienceSelectedReducer from "../reducers/experienceSelectedReducer";
import jobsReducer from "../reducers/jobsReducer";

const rootReducer = combineReducers({
  profile: profileSelectedReducer,
  myProfile: myProfileReducer,
  loading: loadingReducer,
  error: errorReducer,
  aside: personeAsideReducer,
  experience: experienceReducer,
  update: updatedReducer,
  experienceSelected: experienceSelectedReducer,
  jobs: jobsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
