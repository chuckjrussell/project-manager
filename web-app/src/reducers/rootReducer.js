import {combineReducers} from 'redux';
import tasks from './taskReducer';
import statuses from './statusReducer';
import users from './userReducer';

const rootReducer = combineReducers({
    tasks,
    statuses,
    users
});

export default rootReducer;