import Input from './components/Input';
import Task from './components/Task';
import { useSelector, useDispatch } from "react-redux";
import { pressButton, setSelectSort } from './redux/actions/appActions';

const App = () => {
  const selectedButton = useSelector(state => state.app.selectedButton);
  const dispatch = useDispatch();

  const handleButton = type => {
    dispatch(pressButton(type))
  }

  const handleSort = (event) => {
    dispatch(setSelectSort(event.target.value))
    console.log(event.target.value)
  }

  return (
    <div className='App'>
      <h1 className='main-title'>To-do List </h1>
      <Input />
      <button className={`button-all ${selectedButton === "all" ? "selected" : ""}`}
        onClick={() => handleButton("all")}> all tasks </button>
      <button className={`button-private ${selectedButton === "private" ? "selected" : ""}`}
        onClick={() => handleButton("private")}> private </button>
      <button className={`button-job ${selectedButton === "job" ? "selected" : ""}`}
        onClick={() => handleButton("job")} >job</button>
      <select className='select' onChange={handleSort} defaultValue="default">
        <option value="default" disabled >Sort</option>
        <option value='date_new'>date (new to old)</option>
        <option value='date_old'>date (old to new) </option>
        <option value='alphabet_AZ'>alphabet (a-z)</option>
        <option value='alphabet_ZA'>alphabet (z-a)</option>
      </select>
      <Task />
    </div>
  )
}

export default App;
