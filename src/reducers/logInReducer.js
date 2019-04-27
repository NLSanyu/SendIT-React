import { LOGGED_IN } from "../actions/types";

const initialState = {
  loggedIn: false
};

const logInReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGGED_IN:
      return {
        ...state,
        loggedIn: true
      };
    default:
      return state;
  }
};

export default logInReducer;
