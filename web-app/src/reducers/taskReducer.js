import * as actions from '../actions/actionTypes'

export default function taskReducer(state = [], action){
    switch(action.type){
        case actions.CREATE_TASK_SUCCESS:
            return [
                ...state, 
                Object.assign({}, action.task)
            ];
        
        case actions.UPDATE_TASK_SUCCESS: 
            return [
                ...state.filter(t => t.id !== action.task.id),
                Object.assign({}, action.task)
            ]

        case actions.LOAD_TASK_SUCCESS:
            return action.tasks;

        default:
            return state;
    }
}