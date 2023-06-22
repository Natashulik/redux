import { ADD_NEW_TASK, CHANGE_TASK_TITLE, DELETE_TASK, EDIT_TASK, TASK_IS_COMPLETED } from "../actions/taskActions";

const initialState = {
  tasks: [{ id: 1, title: "шоппинг", type: "private", completed: false, editMode: false },
  { id: 2, title: "встреча с подругой", type: "private", completed: false, editMode: false },
  { id: 3, title: "совещание", type: "job", completed: false, editMode: false },
  { id: 4, title: "подготовить отчет", type: "job", completed: false, editMode: false }]
}

const taskReducer = (state = initialState, action) => {
  switch (action.type) {

    case ADD_NEW_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload]
      };

    case CHANGE_TASK_TITLE:
      return {
        ...state,
        tasks: state.tasks.map(item => item.id !== action.payload.id ? item : { ...item, title: action.payload.newTitle }),
      };

    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(item => item.id !== action.payload)
      };

    case EDIT_TASK:
      return {
        ...state,
        tasks: state.tasks.map(item => item.id === action.payload ? { ...item, editMode: !item.editMode } : item)
      };

    case TASK_IS_COMPLETED:
      return {
        ...state,
        tasks: state.tasks.map(item => item.id === action.payload.id ? { ...item, completed: !item.completed } : item)
      };

    default:
      return state;
  }
};

export default taskReducer;
