import * as actions from '../actions/actionTypes'

export default function courseReducer(state = [], action){
    switch(action.type){
        case actions.CREATE_TASK:
            return [...state, Object.assign({}, action.task)];

        case actions.LOAD_TASK_SUCCESS:
            return action.tasks;

        default:
            return state;
    }
}