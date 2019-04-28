import { Redirect } from "react-router-dom";
import axios from "axios";
import { PARCEL_CREATED, GET_ALL_PARCELS } from "./types";

const authHeader = {
  headers: {
    'Authorization': 'Bearer ' + sessionStorage.token
  }
};


export const createNewParcel = parcelInfo => dispatch => {
  return axios
    .post("https://nls-sendit.herokuapp.com/api/v1/parcels", parcelInfo, authHeader)
    .then(function(response) {
      dispatch({
        type: PARCEL_CREATED,
        payload: true
      });
      <Redirect to="/" />;
    })
    .catch(function(error) {
    });
};

export const getAllParcels = (userId) => dispatch => {
  return axios
    .post(`https://nls-sendit.herokuapp.com/api/v1/users/${userId}/parcels`, authHeader)
    .then(function(response) {
      dispatch({
        type: GET_ALL_PARCELS,
        payload: response.data.parcels
      });
      <Redirect to="/" />;
    })
    .catch(function(error) {
    });
};
