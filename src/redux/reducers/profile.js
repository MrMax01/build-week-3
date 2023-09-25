import { SELECT_PROFILE } from "../actions";

const initialState = {
  content: null,
};

const profileSelectedReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_PROFILE:
      return {
        content: action.payload,
      };

    default:
      return state;
  }
};

export default profileSelectedReducer;
