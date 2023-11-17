import { FOLLOW, REMOVE, PARAMS, SEARCH, SET_SEARCH, LOADING } from "../store";
import {
  CREATE_EVENT,
  GET_PROFILE_DATA,
  GET_RANDOM_PHOTOS,
  LIKE_POST,
  REMOVE_FAVOURITE_JOB,
  REMOVE_FAVOURITE_JOB_ID,
  SEND_FAVOURITE_JOB,
  SEND_FAVOURITE_JOB_ID,
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
  chatResponse: "",
  favouriteJobs: [],
  favouriteJobsId: [],
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
    case SEND_FAVOURITE_JOB:
      return {
        ...state,
        favouriteJobs: [...state.favouriteJobs, action.payload],
      };
    case SEND_FAVOURITE_JOB_ID:
      return {
        ...state,
        favouriteJobsId: [...state.favouriteJobsId, action.payload],
      };
    case REMOVE_FAVOURITE_JOB:
      return {
        ...state,
        favouriteJobs: state.favouriteJobs.filter(
          (job) => job !== action.payload
        ),
      };
    case REMOVE_FAVOURITE_JOB_ID:
      return {
        ...state,
        favouriteJobsId: state.favouriteJobsId.filter(
          (id) => id !== action.payload
        ),
      };

    default:
      return state;
  }
};

export default mainReducer;
