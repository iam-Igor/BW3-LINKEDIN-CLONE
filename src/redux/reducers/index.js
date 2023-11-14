import { FOLLOW, REMOVE, PARAMS, SEARCH, SET_SEARCH } from "../store";

const initialState = {
  following: "",
  urlParams: "",
  searchInput: "",
  searchData: false,
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
    case SEARCH:
      return {
        ...state,
        searchInput: action.payload,
      };
    case SET_SEARCH:
      return {
        ...state,
        searchData: action.payload,
      };
    default:
      return state;
  }
};

export default mainReducer;
