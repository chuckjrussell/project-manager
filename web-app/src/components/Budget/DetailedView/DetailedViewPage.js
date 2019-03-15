import React from 'react';
import Category from './Category';
import BudgetSummary from './BudgetSummary';
import {connect} from 'react-redux';
import NewCategory from './NewCategory';

const DetailedViewPage = (props) => {
    return (
        <div className="row">
            <div className="col-md-8">
                {props.categories.map(cat => {
                        return (
                            <Category key={cat.id} category={cat}/>
                        );
                    })}

                <NewCategory/>
            </div>
            <div className="col-md-4">
                <BudgetSummary />
            </div>
        </div>
    )
};

function mapStateToProps(state, ownProps){
    return {
        categories: state.categories.categories
    }
}

export default connect(mapStateToProps)(DetailedViewPage);