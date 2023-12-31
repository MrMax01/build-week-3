import { GET_EXPERIENCE } from "../actions";

const initialState = {
  content: null,
};
const experienceReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EXPERIENCE:
      return {
        content: action.payload,
      };
    default:
      return state;
  }
};

export default experienceReducer;
