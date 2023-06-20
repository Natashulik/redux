import { useSelector, useDispatch } from "react-redux";
import { setInputText, setIsEmpty, setNewTask } from "../redux/actions/inputActions";


const Input = () => {
  const tasks = useSelector(state => state.input.tasks);
  const isEmpty = useSelector(state => state.input.isEmpty);
  const text = useSelector(state => state.input.text);
  const dispatch = useDispatch();


 function onChange(event) {
    dispatch(setInputText(event.target.value))
  }

  const handleClick = ()=>{
    if(text) {
      const newTask = {id: Date.now(), title: text, completed: false};
      dispatch(setNewTask(newTask));
      dispatch(setInputText(''));
      console.log(tasks)
      } else {
      dispatch(setIsEmpty(true));
    }
     }

    return (
        <div className='new-task_block'>
          <input className='new-task' value={text}  onChange={onChange}  placeholder={isEmpty ? 'Add task' : ''}/>
        <button className='button-add' onClick={handleClick}>Add</button>
        </div>
    )
}

export default Input;