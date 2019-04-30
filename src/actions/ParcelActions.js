import axios from "axios";
import { PARCEL_CREATED, GET_ALL_PARCELS } from "./types";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const authHeader = {
  headers: {
    'Authorization': 'Bearer ' + localStorage.token
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
      toast("Parcel created");
    })
    .catch(function(error) {
      toast("Failed to create parcel");
    });
};

export const getAllParcels = (userId) => dispatch => {
  return axios
    .get(`https://nls-sendit.herokuapp.com/api/v1/users/${userId}/parcels`, authHeader)
    .then(function(response) {
      dispatch({
        type: GET_ALL_PARCELS,
        payload: response.data.data
      });
    })
    .catch(function(error) {
    });
};
