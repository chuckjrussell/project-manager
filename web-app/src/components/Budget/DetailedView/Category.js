import React from 'react';
import CategoryItemsList from './CategoryItemsList';
import PropTypes from 'prop-types';

const Category = (props) => {
    return (
        <div>
            <h4>{props.category.name}</h4>
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