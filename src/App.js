import { useSelector } from 'react-redux';
import Input from './components/Input';
import Task from './components/Task';

const App=()=> {
  const tasks =useSelector(state => state.task.tasks)

   return (
    <div className='App'>
      <h1 className='main-title'>To-do List </h1>
      <Input/>
       <Task/> 
    </div>
  )

}

export default App;
