import { FOLLOW, REMOVE } from "../store";

const initialState = {
  following: "",
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
    default:
      return state;
  }
};

export default mainReducer;
