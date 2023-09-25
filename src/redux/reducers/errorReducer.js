import { ERROR } from "../actions";

const initialState = {
  error: false,
};

const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case ERROR:
      return {
        loading: action.payload,
      };
    default:
      return state;
  }
};
export default errorReducer;
