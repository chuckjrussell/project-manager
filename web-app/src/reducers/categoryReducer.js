import * as actions from '../actions/actionTypes'

export default function categoryReducer(state = [], action){
    switch(action.type){
        case actions.CREATE_CATEGORY_SUCCESS:
            return [
                ...state, 
                Object.assign({}, action.category)
            ];
        
        case actions.UPDATE_CATEGORY_SUCCESS: 
            return [
                ...state.filter(c => c.id !== action.category.id),
                Object.assign({}, action.category)
            ]

        case actions.LOAD_CATEGORY_SUCCESS:
            return action.categories;

        default:
            return state;
    }
}