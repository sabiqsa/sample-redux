import {
  GET_USER_LOADING,
  GET_USER_SUCCESS,
  GET_USER_ERROR
} from "../constant/cake";

const initialState = {
  loading: false,
  users: [],
  error: ""
};

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER_LOADING:
      return {
        ...state,
        loading: true
      };

    case GET_USER_SUCCESS:
      return {
        loading: false,
        users: action.payload,
        error: ""
      };

    case GET_USER_ERROR:
      return {
        loading: false,
        users: [],
        error: action.payload
      };
  }
}
