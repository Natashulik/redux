export const ADD_NEW_TASK = 'ADD_NEW_TASK';
export const CHANGE_TASK_TITLE = 'CHANGE_TASK_TITLE';
export const DELETE_TASK = 'DELETE_TASK';
export const EDIT_TASK = 'EDIT_TASK';
export const TASK_IS_COMPLETED = 'TASK_IS_COMPLETED';

export const setNewTask = (task) => ({            // добавляет новую задачу
    type: ADD_NEW_TASK,
    payload: task
})

export const changeTaskTitle = (id, newTitle) => ({   //редактирует задачу
    type: CHANGE_TASK_TITLE,
    payload: { id, newTitle }
})

export const deleteTask = (id) => ({        //удаляет задачу
    type: DELETE_TASK,
    payload: id
})

export const editTask = id => ({          // меняет свойтво editMode 
    type: EDIT_TASK,
    payload: id
})

export const setIsCompleted = (id, isCompleted) => ({  // меняет свойтво completed 
    type: TASK_IS_COMPLETED,
    payload: { id, isCompleted }
})

