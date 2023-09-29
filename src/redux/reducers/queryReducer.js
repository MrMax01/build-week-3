import { SEARCH_QUERY } from "../actions";

const initialState = {
  content: null,
};

const queryReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_QUERY:
      return {
        ...state,
        content: action.payload,
      };
    default:
      return state;
  }
};

export default queryReducer;
