import {
  FETCH_VEHICLES_START,
  FETCH_VEHICLES_SUCCESS,
  FETCH_VEHICLES_FAIL,
  ADD_VEHICLE,
} from "../actions/actionsTypes";

import axios from "axios";

const fetchVehiclesStart = () => {
  return {
    type: FETCH_VEHICLES_START,
  };
};

const fetchVehiclesSuccess = (data) => {
  return {
    type: FETCH_VEHICLES_SUCCESS,
    vehicles: data,
  };
};

const fetchVehiclesFail = (data) => {
  return {
    type: FETCH_VEHICLES_FAIL,
    message: data,
  };
};

export const fetchVehicles = () => {
  return (dispatch) => {
    dispatch(fetchVehiclesStart);

    axios
      .get("https://miral-backend.herokuapp.com/vehicles")
      .then((res) => {
        console.log(res.data);
        dispatch(fetchVehiclesSuccess(res.data.vehicles));
      })
      .catch((err) => {
        console.log(err.response);
        dispatch(fetchVehiclesFail(err.response.data.message));
      });
  };
};

export const addVehicle = (data) => {
  return (dispatch) => {
    dispatch(fetchVehiclesStart());

    let config = null;
    let token = localStorage.getItem("token");
    if (token) {
      config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
    }

    axios
      .post("https://miral-backend.herokuapp.com/vehicles", data, config)
      .then((res) => {
        dispatch({
          type: ADD_VEHICLE,
          vehicle: res.data.vehicle,
        });
      })
      .catch((err) => dispatch(fetchVehiclesFail(err.response.data.message)));
  };
};
