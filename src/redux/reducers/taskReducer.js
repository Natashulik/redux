import {CHANGE_TASK_TITLE, DELETE_TASK, EDIT_TASK } from "../actions/taskActions"; 
import { initialState } from "../constants";

  const taskReducer = (state = initialState, action) => {
    switch (action.type) {
      case CHANGE_TASK_TITLE:
        return {
          ...state,
          tasks: state.tasks.map(item => item.id !== action.payload.id ? item : {...item, title: action.payload.newTitle}),
        };

     case DELETE_TASK:
        return {
          ...state,
          tasks: state.tasks.filter(item=> item.id !== action.payload)
        };

     case EDIT_TASK:
         return {
            ...state,
            tasks: state.tasks.filter(item=> item.id === action.payload? { ...item, editMode: true }: item)
         };

          default:
        return state;
    }
  };
  
  export default taskReducer;
  