import * as actions from './actionTypes';
import statusApi from '../api/tasks/statusApi';

export function loadStatusesSuccess(statuses){
    return {type: actions.LOAD_STATUSES_SUCCESS, statuses};
}

export function loadStatuses() {
    return function (dispatch){
        return statusApi.getAllStatuses().then(statuses => {
            dispatch(loadStatusesSuccess(statuses));
        }).catch(err => {
            throw(err);
        });
    }
}
