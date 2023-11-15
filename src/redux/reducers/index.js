import { FOLLOW, REMOVE, PARAMS, SEARCH, SET_SEARCH, LOADING } from "../store";
import {
  CREATE_EVENT,
  GET_PROFILE_DATA,
  LIKE_POST,
} from "../actions/actionsHome";

const initialState = {
  following: "",
  urlParams: "",
  searchInput: "",
  searchData: false,
  profileData: null,
  events: [],
  likedPosts: [],
  isLoading: true,
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
    case GET_PROFILE_DATA:
      return {
        ...state,
        profileData: action.payload,
      };
    case CREATE_EVENT:
      return {
        ...state,
        events: [...state.events, action.payload],
      };
    case LIKE_POST:
      if (!state.likedPosts.includes(action.payload)) {
        return {
          ...state,
          likedPosts: [...state.likedPosts, action.payload],
        };
      }
      return {
        ...state,
        likedPosts: state.likedPosts.filter(
          (postId) => postId !== action.payload
        ),
      };
    case LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };

    default:
      return state;
  }
};

export default mainReducer;
