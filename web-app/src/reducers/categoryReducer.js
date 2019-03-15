import * as actions from '../actions/actionTypes'

export default function categoryReducer(state = {categories: []}, action){
    switch(action.type){
        case actions.CATEGORY_ASYNC_REQUESTED:
            return Object.assign({}, state, {
                isLoading: true
            });
        case actions.CREATE_CATEGORY_SUCCESS:
            return Object.assign({}, state, {
                isLoading: false,
                error: '',
                categories: [
                    ...state.categories, 
                    Object.assign({}, action.category)
                ]
            });
        
        case actions.UPDATE_CATEGORY_SUCCESS: 
            return Object.assign({}, state, {
                isLoading: false,
                error: '',
                categories: [
                    ...state.categories.filter(c => c.id !== action.category.id),
                    Object.assign({}, action.category)
                ]
            });

        case actions.LOAD_CATEGORY_SUCCESS:
            return {
                isLoading: false,
                errorMessage: '', 
                categories: action.categories
            };

        
        case actions.CREATE_CATEGORY_FAILED:
        case actions.LOAD_CATEGORY_FAILED:
        case actions.UPDATE_CATEGORY_FAILED:
            return Object.assign({}, state, {
                isLoading: false,
                errorMessage: state.error
            });

        default:
            return state;
    }
}