import * as actions from './actionTypes';
import categoriesApi from '../api/budget/categoriesApi';

export function createCategorySuccess(category) {
    return {type: actions.CREATE_CATEGORY_SUCCESS, category};
}

export function updateCategorySuccess(category) {
    return {type: actions.UPDATE_CATEGORY_SUCCESS, category};
}

export function loadCategorySuccess(categories){
    return {type: actions.LOAD_CATEGORY_SUCCESS, categories};
}

export function loadCategories() {

    console.log("loading categories");
    return function (dispatch){
        return categoriesApi.getAllCategories().then(categories => {
            dispatch(loadCategorySuccess(categories));
        }).catch(err => {
            throw(err);
        });
    }
}

export function saveCategory(category) {
    return function(dispatch) {
        return categoriesApi.saveCategory(category).then(category => {
            category.id ? dispatch(updateCategorySuccess(category)) : dispatch(createCategorySuccess(category))
        }).catch(err => {
            throw(err);
        })
    }
}