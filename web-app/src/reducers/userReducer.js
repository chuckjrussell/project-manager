import * as actions from '../actions/actionTypes'

export default function userReducer(state = [], action){
    switch(action.type){
        case actions.LOAD_USERS_SUCCESS:
            return action.users;

        default:
            return state;
    }
}
