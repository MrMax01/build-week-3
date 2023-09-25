import { GET_PERSONE_ASIDE } from "../action";

const initialState = {
  content: null,
};
const personeAsideReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PERSONE_ASIDE:
      return {
        ...state,
        content: action.payload,
      };
    default:
      return state;
  }
};

export default personeAsideReducer;
