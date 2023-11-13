const initialState = {
  following: "",
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FOLLOW":
      return {
        ...state,
        following: [...state.following, action.payload],
      };
    default:
      return state;
  }
};

export default mainReducer;
