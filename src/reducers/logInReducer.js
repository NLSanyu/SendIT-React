import { LOGGED_IN } from "../actions/types";

const initialState = {
  user: []
};

const logInReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGGED_IN:
      return {
        ...state,
        user: action.payload
      };
    default:
      return state;
  }
};

export default logInReducer;
