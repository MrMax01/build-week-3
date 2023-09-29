import { ADD_FOLLOW, DELETE_FOLLOW } from "../actions";

const initialState = {
  content: [],
};
const followFriendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FOLLOW:
      return {
        ...state,
        content: [...state.content, action.payload],
      };
    case DELETE_FOLLOW:
      return {
        ...state,
        content: state.content.filter((elem) => elem._id !== action.payload._id),
      };
    default:
      return state;
  }
};

export default followFriendsReducer;
