import { MY_PROFILE } from "../actions";

const initialState = {
  myContent: null,
};

const myProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case MY_PROFILE:
      return {
        myContent: action.payload,
      };
    default:
      return state;
  }
};
export default myProfileReducer;
