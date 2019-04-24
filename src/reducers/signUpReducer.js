import { SIGNUP_SUCCESS, SIGNUP_FAIL } from "../actions/types";

const initialState = {
  signedUp: false
};

const signUpReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_SUCCESS:
      return {
        ...state,
        signedUp: true
      };
    case SIGNUP_FAIL:
      return {
        ...state,
        signedUp: false
      };
    default:
      return state;
  }
};

export default signUpReducer;
