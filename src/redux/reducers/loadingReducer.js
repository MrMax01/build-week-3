import { LOADING } from "../actions";

const initialState = {
  loading: true,
};

const loadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return {
        loading: action.payload,
      };
    default:
      return state;
  }
};
export default loadingReducer;
