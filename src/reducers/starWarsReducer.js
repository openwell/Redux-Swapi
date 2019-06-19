import * as types from /* we need our action types here*/ "../actions/index";
const initialState = {
  characters: [],
  fetching: false,
  error: null
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case (types.FETCHING):
      return { ...state, fetching: action.payload };
    case (types.SUCCESS):
      // return { ...state, characters: action.payload};
      return Object.assign({}, state, {characters:action.payload})
    case (types.FAILURE):
        return Object.assign({}, state, {error:action.payload})

    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};
