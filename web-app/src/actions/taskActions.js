import * as actions from './actionTypes';
import taskApi from '../api/mock/taskApi';

export function createTask(task) {
    return {type: actions.CREATE_TASK, task};
}

export function loadTasksSuccess(tasks){
    return {type: actions.LOAD_TASK_SUCCESS, tasks};
}

export function loadTasks() {
    return function (dispatch){
        return taskApi.getAllTasks().then(tasks => {
            dispatch(loadTasksSuccess(tasks));
        }).catch(err => {
            throw(err);
        });
    }
}

export function saveTask(task) {
    return function(dispatch) {
        return taskApi.saveTask(task).then(task => {
            dispatch()
        })
    }
}