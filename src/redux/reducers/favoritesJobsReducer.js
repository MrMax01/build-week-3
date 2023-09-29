import { ADD_TO_FAVORITES_JOBS, REMOVE_FROM_FAVORITES_JOBS } from "../actions";

const initialState = {
  content: [],
};
const favoritesJobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITES_JOBS:
      return {
        ...state,
        content: [...state.content, action.payload],
      };
    case REMOVE_FROM_FAVORITES_JOBS:
      return {
        ...state,
        content: state.content.filter((company) => company._id !== action.payload._id),
      };
    default:
      return state;
  }
};
export default favoritesJobsReducer;
