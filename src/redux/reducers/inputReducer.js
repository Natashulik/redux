import { INPUT_CHANGE_TEXT, ADD_NEW_TASK, INPUT_IS_EMPTY} from "../actions/inputActions"; 
import { initialState } from "../constants";

  const inputReducer = (state = initialState, action) => {
    switch (action.type) {
      case INPUT_CHANGE_TEXT:
        return {
          ...state,
          text: action.payload,
        };

     case ADD_NEW_TASK:
        return {
          ...state,
          tasks: [...state.tasks, action.payload]
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
  