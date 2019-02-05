import * as actions from './actionTypes';
import userApi from '../api/mock/userApi';

export function loadUsersSuccess(users){
    return {type: actions.LOAD_USERS_SUCCESS, users};
}

export function loadUsers() {
    return function (dispatch){
        return userApi.getAllUsers().then(users => {
            dispatch(loadUsersSuccess(users));
        }).catch(err => {
            throw(err);
        });
    }
}
