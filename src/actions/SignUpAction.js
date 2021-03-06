import axios from "axios";
import { SIGNUP_SUCCESS, SIGNUP_FAIL } from "./types";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const signUp = userInfo => dispatch => {
  return axios
    .post("https://nls-sendit.herokuapp.com/api/v1/auth/signup", userInfo)
    .then(function(response) {
      dispatch({
        type: SIGNUP_SUCCESS,
        payload: true
      });
      toast(response.data.message);
    })
    .catch(function(error) {
      dispatch({
        type: SIGNUP_FAIL,
        payload: true
      });
      toast(error.response.data.message);
    });
};

export default signUp;
