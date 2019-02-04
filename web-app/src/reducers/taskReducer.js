import * as actions from '../actions/actionTypes'

export default function courseReducer(state = [], action){
    switch(action.type){
        case actions.CREATE_TASK:
            return [...state, Object.assign({}, action.task)];

        default:
            return state;
    }
}