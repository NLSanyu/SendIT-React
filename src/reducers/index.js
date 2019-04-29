import { combineReducers } from 'redux';

import signUpReducer from './signUpReducer';
import logInReducer from './logInReducer';
import parcelsReducer from './parcelsReducer';

export default combineReducers({
  signUp: signUpReducer,
  logIn: logInReducer,
  parcels: parcelsReducer,
});
