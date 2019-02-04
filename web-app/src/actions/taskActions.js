import * as actions from './actionTypes';

export function createTask(task) {
    return {type: actions.CREATE_TASK, task};
}