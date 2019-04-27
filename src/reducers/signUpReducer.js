import { SIGNUP_SUCCESS, SIGNUP_FAIL } from "../actions/types";

const initialState = {
  signedUp: false
};

const signUpReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_SUCCESS:
      return {
        ...state,
        signedUp: action.payload
      };
    case SIGNUP_FAIL:
      return {
        ...state,
        signedUp: action.payload
      };
    default:
      return state;
  }
};

export default signUpReducer;
