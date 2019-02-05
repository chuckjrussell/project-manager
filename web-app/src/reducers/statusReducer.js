import * as actions from '../actions/actionTypes'

export default function statusReducer(state = [], action){
    switch(action.type){
        case actions.LOAD_STATUSES_SUCCESS:
            return action.statuses;

        default:
            return state;
    }
}
