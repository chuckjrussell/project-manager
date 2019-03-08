import {combineReducers} from 'redux';
import tasks from './taskReducer';
import statuses from './statusReducer';
import users from './userReducer';
import categories from './categoryReducer';

const rootReducer = combineReducers({
    tasks,
    statuses,
    users,
    categories
});

export default rootReducer;