import { Redirect } from "react-router-dom";
import axios from "axios";
import { LOGGED_IN } from "./types";

export const logIn = userInfo => dispatch => {
  document.getElementById("load").style.display = "block";
  console.log(userInfo);
  return axios
    .post("https://nls-sendit.herokuapp.com/api/v1/auth/login", userInfo)
    .then(function(response) {
      dispatch({
        type: LOGGED_IN,
        payload: true
      });
      <Redirect to='/' />

    })
    .catch(function(error) {});
};
