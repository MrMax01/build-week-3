import { ADD_FOLLOW, DELETE_FOLLOW } from "../actions";

const initialState = {
  content: null,
};
const followFriendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FOLLOW:
      return {
        ...state,
        content: action.payload,
      };
    case DELETE_FOLLOW:
      return {
        ...state,
        content: state.content.filter((_, i) => i !== action.payload),
      };
    default:
      return state;
  }
};

export default followFriendsReducer;
