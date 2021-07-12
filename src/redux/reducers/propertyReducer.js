import {
  FETCH_PROPERTIES_START,
  FETCH_PROPERTIES_SUCCESS,
  FETCH_PROPERTIES_FAIL,
  ADD_PROPERTY,
  DELETE_PROPERTY,
} from "../actions/actionsTypes";

const initialState = {
  properties: [],
  loading: false,
  error: null,
};

const propertyReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PROPERTIES_START:
      return {
        ...state,
        loading: true,
      };
    case FETCH_PROPERTIES_SUCCESS:
      return {
        ...state,
        properties: [...action.properties],
        loading: false,
      };
    case FETCH_PROPERTIES_FAIL:
      return {
        ...state,
        loading: false,
        error: action.message,
      };
    case ADD_PROPERTY:
      return {
        ...state,
        properties: [action.property, ...state.properties],
        loading: false,
      };
    case DELETE_PROPERTY:
      const id = action.id;
      const index = [...state.properties].findIndex(
        (property) => property._id === id
      );
      const newProperties = [...state.properties].splice(index, 1);
      return {
        ...state,
        properties: [newProperties],
        loading: false,
      };
    default:
      return state;
  }
};

export default propertyReducer;
