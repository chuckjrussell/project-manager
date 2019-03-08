import React from 'react';
import Category from './Category';
import PropTypes from 'prop-types';
import BudgetSummary from './BudgetSummary';
import {connect} from 'react-redux';

const DetailedViewPage = (props) => {
    return (
        <div className="row">
            <div className="col-md-8">
                {props.categories.map(cat => {
                    return (
                        <Category key={cat.id} category={cat}/>
                    );
                })}
            </div>
            <div className="col-md-4">
                <BudgetSummary />
            </div>
        </div>
    )
};

function mapStateToProps(state, ownProps){
    return {
        categories: state.categories
    }
}

export default connect(mapStateToProps)(DetailedViewPage);