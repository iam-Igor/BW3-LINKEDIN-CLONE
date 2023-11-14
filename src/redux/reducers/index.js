import { FOLLOW, REMOVE, PARAMS } from "../store";

const initialState = {
  following: "",
  urlParams: "",
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        following: [...state.following, action.payload],
      };
    case REMOVE: {
      return {
        ...state,
        following: state.following.filter(
          (follow, index) => index !== action.payload
        ),
      };
    }
    case PARAMS:
      return {
        ...state,
        urlParams: action.payload,
      };
    default:
      return state;
  }
};

export default mainReducer;
