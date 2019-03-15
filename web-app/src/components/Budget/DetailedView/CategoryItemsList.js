import React from 'react';
import BudgetItem from './BudgetItem';
import PropTypes from 'prop-types';
import './CategoryItemsList.css';

const CategoryItemsList = (props) => {
    return (
        <div>
            <table className="table table-hover">
                <thead>
                    <tr className="table-row-borderless">
                        <td>Item</td>
                        <td>Paid</td>
                        <td>Discount</td>
                        <td>Deposit</td>
                        <td>Refundable</td>
                        <td>Total Cost</td>
                        <td>Outstanding</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.items.map(item => {
                            return (
                                <BudgetItem key={item.id} item={item} />
                            );
                        })
                    }
                </tbody>
            </table>
        </div>
    )
};

CategoryItemsList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default CategoryItemsList;