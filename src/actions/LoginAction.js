import axios from "axios";
import { LOGGED_IN } from "./types";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const logIn = userInfo => dispatch => {
  return axios
    .post("https://nls-sendit.herokuapp.com/api/v1/auth/login", userInfo)
    .then(function(response) {
      dispatch({
        type: LOGGED_IN,
        payload: response.data.user_info
      });
        localStorage.setItem("token", response.data.access_token);
        localStorage.setItem("user_id", response.data.user_info.user_id);
        localStorage.setItem("username", response.data.user_info.username);
        localStorage.setItem("full_name", response.data.user_info.full_name);
        localStorage.setItem("email", response.data.user_info.email);
        localStorage.setItem("phone_number", response.data.user_info.phone_number);
        window.location.replace("/profile");
    })
    .catch(function(error) {
      toast("Failed to sign in, user not registered");
    });
};

export default logIn;
