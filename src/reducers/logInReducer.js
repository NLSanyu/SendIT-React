import { LOGGED_IN } from "../actions/types";

const initialState = {
  loggedIn: false,
  profileInfo: []
};

const logInReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGGED_IN:
      return {
        ...state,
        loggedIn: action.loggedIn,
        profileInfo: action.profileInfo
      };
    default:
      return state;
  }
};

export default logInReducer;
