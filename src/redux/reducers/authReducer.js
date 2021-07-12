import { AUTH_START, AUTH_SUCCESS, AUTH_FAIL } from "../actions/actionsTypes";

const initialState = {
  loading: false,
  error: null,
  user: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_START:
      return {
        ...state,
        loading: true,
      };
    case AUTH_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.userData,
      };

    case AUTH_FAIL:
      return {
        ...state,
        loading: false,
        error: action.err,
      };

    default:
      return state;
  }
};

export default authReducer;
