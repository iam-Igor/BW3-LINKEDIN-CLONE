import { FOLLOW, REMOVE, PARAMS, SEARCH, SET_SEARCH, LOADING } from "../store";
import {
  CREATE_EVENT,
  GET_PROFILE_DATA,
  GET_RANDOM_PHOTOS,
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
  randomPhotos: [],
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
    case GET_RANDOM_PHOTOS:
      return {
        ...state,
        randomPhotos: action.payload,
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
