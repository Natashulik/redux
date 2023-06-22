import { combineReducers } from 'redux';
import inputReducer from './inputReducer';
import taskReducer from './taskReducer';
import appReducer from './appReducer';


const rootReducer = combineReducers({
    input: inputReducer,
    task: taskReducer,
    app: appReducer
})

export default rootReducer;