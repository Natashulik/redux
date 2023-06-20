import { changeTaskTitle, deleteTask, editTask } from '../redux/actions/taskActions';
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from 'react';

const Task = () => {
  const tasks = useSelector(state => state.task.tasks);
  const dispatch = useDispatch();

  const changeInput = (id, event)=> {
    dispatch(changeTaskTitle(id, event.target.value));
  }

  const handleDeleteTask = id => {
    dispatch(deleteTask(id));
  };

  const toggle = (id, editMode) =>{
    dispatch(editTask(id));
  }

    return (<>
      {tasks.map(item => <div className="task-wrap" key={item.id}>
          <input type="checkbox" className='checkbox'  />
          {item.editMode ? <input value={item.title} onChange={(event) => changeInput(item.id, event)}/>:  <p className="task-title">{item.title}</p>}
          <button className="button-edit" onClick={()=> toggle(item.id, item.editMode)}>{item.editMode ? "✔" : "✎"} </button>
          <button className="button-close" onClick={()=> handleDeleteTask(item.id)}  >✖</button>
        </div>
        )}
   </> )
}

export default Task;