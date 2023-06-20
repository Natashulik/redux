import { combineReducers } from 'redux';
import inputReducer from './inputReducer';
import taskReducer from './taskReducer';


const rootReducer = combineReducers({
 input: inputReducer,
 task: taskReducer
})

export default rootReducer;