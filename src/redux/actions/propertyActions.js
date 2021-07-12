import {
  FETCH_PROPERTIES_START,
  FETCH_PROPERTIES_SUCCESS,
  FETCH_PROPERTIES_FAIL,
  ADD_PROPERTY,
  DELETE_PROPERTY,
} from "../actions/actionsTypes";

import axios from "axios";

const fetchPropertiesStart = () => {
  return {
    type: FETCH_PROPERTIES_START,
  };
};

const fetchPropertiesSuccess = (data) => {
  return {
    type: FETCH_PROPERTIES_SUCCESS,
    properties: data,
  };
};

const fetchPropertiesFail = (data) => {
  return {
    type: FETCH_PROPERTIES_FAIL,
    message: data,
  };
};

export const fetchProperties = () => {
  return (dispatch) => {
    dispatch(fetchPropertiesStart);

    axios
      .get("http://localhost:8000/properties")
      .then((res) => {
        console.log(res.data);
        dispatch(fetchPropertiesSuccess(res.data.properties));
      })
      .catch((err) => {
        console.log(err.response);
        dispatch(fetchPropertiesFail(err.response.data.message));
      });
  };
};

export const addProperty = (data) => {
  return (dispatch) => {
    dispatch(fetchPropertiesStart());

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
      .post("https://miral-backend.herokuapp.com/properties", data, config)
      .then((res) => {
        dispatch({
          type: ADD_PROPERTY,
          property: res.data.property,
        });
      })
      .catch((err) => dispatch(fetchPropertiesFail(err.response.data.message)));
  };
};

export const deleteProperty = (id) => {
  return (dispatch) => {
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
      .delete("https://miral-backend.herokuapp.com/properties/" + id, config)
      .then((res) => {
        dispatch({
          type: DELETE_PROPERTY,
          id,
        });
      })
      .catch((err) => console.log(err));
  };
};
