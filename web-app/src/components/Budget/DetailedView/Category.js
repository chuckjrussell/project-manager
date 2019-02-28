import React, {Component} from 'react';
import CategoryItemsList from './CategoryItemsList';

const Category = (props) => {
    return (
        <div>
            <h4>Category Title</h4>
            <div>
                <CategoryItemsList />
            </div>
        </div>
    )
};

export default Category