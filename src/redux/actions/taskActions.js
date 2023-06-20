export const CHANGE_TASK_TITLE = 'CHANGE_TASK_TITLE' ;
export const DELETE_TASK = 'DELETE_TASK';
export const EDIT_TASK= 'EDIT_TASK';

export const changeTaskTitle = (id, newTitle) => ({
    type: CHANGE_TASK_TITLE,
    payload: {id, newTitle}
})


export const deleteTask = (id) => ({
    type: DELETE_TASK,
    payload: id
})

export const editTask = (id) => ({
    type: EDIT_TASK,
    payload: id
})