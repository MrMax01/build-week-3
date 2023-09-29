import { SEARCH_QUERY } from "../actions";

const initialState = {
  searchQuery: null,
};

const jobsReducer = (state = initialState, action) => {
  switch (action.payload) {
    case SEARCH_QUERY:
      return {
        searchQuery: action.payload,
      };
    default:
      return state;
  }
};

export default jobsReducer;
