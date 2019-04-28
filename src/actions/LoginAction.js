import { Redirect } from "react-router-dom";
import axios from "axios";
import { LOGGED_IN } from "./types";

const logIn = userInfo => dispatch => {
  return axios
    .post("https://nls-sendit.herokuapp.com/api/v1/auth/login", userInfo)
    .then(function(response) {
      dispatch({
        type: LOGGED_IN,
        loggedIn: true,
        profileInfo: response.data.user_info
      });
      sessionStorage.setItem('token', response.data.access_token);
      <Redirect to='/' />

    })
    .catch(function(error) {});
};

export default logIn;
