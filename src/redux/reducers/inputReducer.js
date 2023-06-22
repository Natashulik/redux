import { INPUT_CHANGE_TEXT, INPUT_IS_EMPTY } from "../actions/inputActions";

const initialState = {
  text: '',
  isEmpty: false,
};

const inputReducer = (state = initialState, action) => {
  switch (action.type) {

    case INPUT_CHANGE_TEXT:
      return {
        ...state,
        text: action.payload,
      };

    case INPUT_IS_EMPTY:
      return {
        ...state,
        isEmpty: action.payload,
      };

    default:
      return state;
  }
};

export default inputReducer;
