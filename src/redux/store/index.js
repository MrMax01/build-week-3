import { combineReducers, configureStore } from "@reduxjs/toolkit";
import profileSelectedReducer from "../reducers/profile";
import myProfileReducer from "../reducers/myProfile";
import loadingReducer from "../reducers/loadingReducer";
import errorReducer from "../reducers/errorReducer";
import personeAsideReducer from "../reducers/aside";
import experienceReducer from "../reducers/experience";
import updatedReducer from "../reducers/updated";
import experienceSelectedReducer from "../reducers/experienceSelectedReducer";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";
import followFriendsReducer from "../reducers/followFriendsReducer";

import queryReducer from "../reducers/queryReducer";
import jobsReducer from "../reducers/jobsReducer";
import favoritesJobsReducer from "../reducers/favoritesJobsReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["query", "jobs", "favorites", "follow"],
};
const rootReducer = combineReducers({
  profile: profileSelectedReducer,
  myProfile: myProfileReducer,
  loading: loadingReducer,
  error: errorReducer,
  aside: personeAsideReducer,
  experience: experienceReducer,
  update: updatedReducer,
  experienceSelected: experienceSelectedReducer,
  follow: followFriendsReducer,
  query: queryReducer,
  jobs: jobsReducer,
  favorites: favoritesJobsReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  // reducer
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);
