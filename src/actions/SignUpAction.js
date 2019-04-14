import axios from 'axios';
import {
  SIGNUP_SUCCESS, SIGNUP_FAIL
} from './types';

export const signUp = (userInfo) => dispatch => {
  document.getElementById("load").style.display = "block";
  console.log(userInfo);
    return axios
      .post('https://nls-sendit.herokuapp.com/api/v1/auth/signup', {userInfo})
      .then(function(response) {
        dispatch({
          type: SIGNUP_SUCCESS,
          payload: true,
        });
        alert("Signed up");
      })
      .catch(function(error) {
        alert("Error signing up");
      });
  };
