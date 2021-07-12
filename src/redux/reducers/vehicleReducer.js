import {
  FETCH_VEHICLES_START,
  FETCH_VEHICLES_SUCCESS,
  FETCH_VEHICLES_FAIL,
  ADD_VEHICLE,
} from "../actions/actionsTypes";

const initialState = {
  vehicles: [],
  loading: false,
  error: null,
};

const vehicleReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_VEHICLES_START:
      return {
        ...state,
        loading: true,
      };
    case FETCH_VEHICLES_SUCCESS:
      return {
        ...state,
        vehicles: [...action.vehicles],
        loading: false,
      };
    case FETCH_VEHICLES_FAIL:
      return {
        ...state,
        loading: false,
        error: action.message,
      };
    case ADD_VEHICLE:
      return {
        ...state,
        vehicles: [action.vehicle, ...state.vehicles],
        loading: false,
      };
    default:
      return state;
  }
};

export default vehicleReducer;
