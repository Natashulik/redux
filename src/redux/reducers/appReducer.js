import { PRESS_BUTTON_TASK_TYPE, SELECT_SORT_TYPE } from "../actions/appActions";


const initialState = {
  selectedButton: "all",
  sortType: ''
}

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRESS_BUTTON_TASK_TYPE:
      return {
        ...state,
        selectedButton: action.payload,
      };

    case SELECT_SORT_TYPE:
      return {
        ...state,
        sortType: action.payload,
      };

    default:
      return state;
  }
};

export default appReducer;
