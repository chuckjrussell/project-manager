import React from 'react';
import CategoryItemsList from './CategoryItemsList';
import PropTypes from 'prop-types';
import './Category.css';

const Category = (props) => {

    return (
        <div className="card-container">
            <div className="category-header">
                <h4 className="category-header-text">{props.category.name}</h4>
                <div className="category-options">
                    <ul>
                        <li><a href="#new">New +</a></li>
                        <li><a href="#edit">Edit</a></li>
                    </ul>
                </div>
            </div>

            <div>
                <CategoryItemsList items={props.category.items}/>
            </div>
        </div>
    )
};

Category.propTypes = {
    category: PropTypes.object.isRequired
}

export default Category