import * as actions from './actionTypes';
import taskApi from '../api/tasks/taskApi';

export function createTaskSuccess(task) {
    return {type: actions.CREATE_TASK_SUCCESS, task};
}

export function updateTaskSuccess(task) {
    return {type: actions.UPDATE_TASK_SUCCESS, task};
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
            task.id ? dispatch(updateTaskSuccess(task)) : dispatch(createTaskSuccess(task))
        }).catch(err => {
            throw(err);
        })
    }
}