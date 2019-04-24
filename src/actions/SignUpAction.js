import axios from 'axios';
import {
  SIGNUP_SUCCESS, SIGNUP_FAIL
} from './types';

export const signUp = (userInfo) => dispatch => {
  document.getElementById("load").style.display = "block";
    return axios
      .post('https://nls-sendit.herokuapp.com/api/v1/auth/signup', userInfo)
      .then(function(response) {
        dispatch({
          type: SIGNUP_SUCCESS,
          payload: true,
        });
      })
      .catch(function(error) {
        dispatch({
          type: SIGNUP_FAIL,
          payload: true,
        });
      });
  };
