import { FOLLOW, REMOVE, PARAMS } from "../store";
import { CREATE_EVENT, GET_PROFILE_DATA } from "../actions/actionsHome";

const initialState = {
  following: "",
  urlParams: "",
  profileData: null,
  events: [],
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
    default:
      return state;
  }
};

export default mainReducer;
