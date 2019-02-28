import React, {Component} from 'react';
import BudgetItem from './BudgetItem';

const CategoryItemsList = (props) => {
    return (
        <div>
            <BudgetItem />
            <BudgetItem />
            <BudgetItem />
        </div>
    )
};

export default CategoryItemsList;