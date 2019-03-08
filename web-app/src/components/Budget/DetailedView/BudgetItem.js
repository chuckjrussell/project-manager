import React from 'react';
import PropTypes from 'prop-types';

const BudgetItem = (props) => {
    return (
        <tr>
            <td>{props.item.name}</td>
            <td>{props.item.paid}</td>
            <td>{props.item.discount}</td>
            <td>{props.item.deposit}</td>
            <td>{props.item.refundableDeposit}</td>
            <td>{props.item.totalCost}</td>
            <td></td>
        </tr>
    )
};

BudgetItem.propTypes = {
    item: PropTypes.object.isRequired
}

export default BudgetItem;