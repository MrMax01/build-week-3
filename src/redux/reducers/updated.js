import { UPDATED } from "../actions";

const initialState = {
  content: null,
};

const updatedReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATED:
      return {
        ...state,
        content: action.payload,
      };

    default:
      return state;
  }
};

export default updatedReducer;
