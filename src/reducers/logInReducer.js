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
        profileInfo: action.payload
      };
    default:
      return state;
  }
};

export default logInReducer;
