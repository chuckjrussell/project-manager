import React, {useState} from 'react';
import {Button} from 'react-bootstrap';
import InputGroup from '../../common/forms/InputGroup';
import './NewCategory.css';
import * as categoryActions from '../../../actions/categoryActions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

const NewCategory = (props) => {
    const [isCreating, setIsCreating] = useState(false);
    const [categoryTitle, setCategoryTitle] = useState('');

    function handleToggleClicked(e){
        setIsCreating(!isCreating);

        if(!isCreating){
            setCategoryTitle('');
        }
    }

    function handleCategoryChanged(e){
        setCategoryTitle(e.target.value);
    }

    function handleSaveClicked(e){
        props.actions.saveCategory({
            name: categoryTitle
        }).then(data => {
            setCategoryTitle('');
            handleToggleClicked();
        });

    }

    const createButton = (
        <Button onClick={handleToggleClicked} className="btn btn-primary my-2 my-sm-0">New Category +</Button>
    );

    const creatingPanel = (
        <div className="row">
            <div className="col-md-8">
                <InputGroup id="categoryName"
                            type="text"
                            label="Name"
                            placeholder="Category Name"
                            value={categoryTitle}
                            onChange={handleCategoryChanged}
                            disabled={props.categories.isLoading}/>
            </div>

            <div className="col-md-2 button-container">
                <Button className="btn-primary my-2 my-sm-0" 
                    onClick={handleSaveClicked} 
                    disabled={props.categories.isLoading}
                    block>Save</Button>
            </div>
            <div className="col-md-2 button-container">
                <Button className="btn-outline-danger my-2 my-sm-0" 
                    onClick={handleToggleClicked} 
                    disabled={props.categories.isLoading}
                    block>Cancel</Button>
            </div>
        </div>
    );

    return (
        <div className="card-container">
            {isCreating ? creatingPanel : createButton}
        </div>
    );
}

function mapStateToProps(state, ownProps){
    return {
        categories: state.categories
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(categoryActions, dispatch)
      };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewCategory);