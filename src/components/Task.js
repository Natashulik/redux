import { changeTaskTitle, deleteTask, editTask } from '../redux/actions/taskActions';
import { useSelector, useDispatch } from "react-redux";

const Task = () => {
  const tasks = useSelector(state => state.task.tasks);
  console.log('рендерится Task')
  const dispatch = useDispatch();

  const handleDeleteTask = id => {
    dispatch(deleteTask(id));
  };

  const handleEditTask = id => {
    dispatch(editTask(id));
  };

    return (<>
      {tasks.map(item => <div className="task-wrap" key={item.id}>
          <input type="checkbox" className='checkbox'  />
          {item.editMode ? <input />:  <p className="task-title">{item.title}</p>}
          <button className="button-edit" >{item.editMode ? "✔" : "✎"} </button>
          <button className="button-close" onClick={()=> handleDeleteTask(item.id)}  >✖</button>
        </div>
        )}
   </> )
}

export default Task;