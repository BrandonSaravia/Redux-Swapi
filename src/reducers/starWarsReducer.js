import { GET_DATA_START, GET_DATA_SUCCESS, GET_DATA_FAILURE } from "../actions";



const initialState = {
  characters: [],
  // Array characters, Boolean fetching, null error.
  error: null,
  isFetching: false
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case GET_DATA_START:
      return {
        ...state,
        error: null,
        isFetching: true
      };
    case GET_DATA_SUCCESS:
      return {
        ...state,
        error: null,
        isFetching: false,
        characters: action.payload
      }
    case GET_DATA_FAILURE:
    default:
      return state;
  }
};
