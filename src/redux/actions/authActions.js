import { AUTH_START, AUTH_SUCCESS, AUTH_FAIL } from "./actionsTypes";

import axios from "axios";

const authStart = () => {
  return {
    type: AUTH_START,
  };
};

const authSucess = (data) => {
  return {
    type: AUTH_SUCCESS,
    userData: data,
  };
};

const authFail = (err) => {
  return {
    type: AUTH_FAIL,
    err: err,
  };
};

export const auth = (username, password) => {
  const data = {
    username,
    password,
  };
  return (dispatch) => {
    dispatch(authStart);

    axios
      .post("https://miral-backend.herokuapp.com/users/login", data)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        dispatch(authSucess(res.data.user));
      })
      .catch((err) => {
        console.log(err);
        dispatch(authFail(err.response.data.message));
      });
  };
};
