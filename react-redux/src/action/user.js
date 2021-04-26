import {
  GET_USER_LOADING,
  GET_USER_SUCCESS,
  GET_USER_ERROR
} from "../constant/cake";

import axios from "axios";

const getUserLoading = () => {
  return {
    type: GET_USER_LOADING
  };
};

const getUserSuccess = users => {
  return {
    type: GET_USER_SUCCESS,
    payload: users
  };
};

const getUserError = error => {
  return {
    type: GET_USER_ERROR,
    payload: error
  };
};

export const fetchUsers = () => {
  return dispatch => {
    dispatch(getUserLoading());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(res => {
        const data = res.data;
        dispatch(getUserSuccess(data));
      })
      .catch(err => {
        const error = err.message;
        dispatch(getUserError(error));
      });
  };
};
