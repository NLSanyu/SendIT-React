import { PARCEL_CREATED, GET_ALL_PARCELS } from "../actions/types";

const initialState = {
  parcelCreated: false,
  parcels: []
};

const parcelsReducer = (state = initialState, action) => {
  switch (action.type) {
    case PARCEL_CREATED:
      return {
        ...state,
        parcelCreated: action.payload
      };
    case GET_ALL_PARCELS:
      return {
        ...state,
        parcels: action.payload
      };
    default:
      return state;
  }
};

export default parcelsReducer;
