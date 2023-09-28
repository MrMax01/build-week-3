import { GET_EXPERIENCE_SELECTED } from "../actions";

const initialState = {
  content: null,
};
const experienceSelectedReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EXPERIENCE_SELECTED:
      return {
        content: action.payload,
      };
    default:
      return state;
  }
};

export default experienceSelectedReducer;
