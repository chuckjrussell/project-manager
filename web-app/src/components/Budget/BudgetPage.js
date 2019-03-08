import React, {Component} from 'react';
import DetailedViewPage from './DetailedView/DetailedViewPage';

const budgetItems = {
    categories: [{
            id: '1',
            name: 'Decorations',
            items: [{
                    id: '1',
                    name: 'Lorem Ipsum',
                    paid: 100,	
                    discount: 100,
                    deposit: 100,
                    refundableDeposit: 100,	
                    totalCost: 100
                },{
                    id: '2',
                    name: 'Sed Dolor',
                    paid: 100,	
                    discount: 100,
                    deposit: 100,
                    refundableDeposit: 100,	
                    totalCost: 100
                }
            ]
        },{
            id: '2',
            name: 'Venue',
            items: [{
                    id: '3',
                    name: 'Lorem Ipsum',
                    paid: 100,	
                    discount: 100,
                    deposit: 100,
                    refundableDeposit: 100,	
                    totalCost: 100
                },{
                    id: '4',
                    name: 'Sed Dolor',
                    paid: 100,	
                    discount: 100,
                    deposit: 100,
                    refundableDeposit: 100,	
                    totalCost: 100
                }
            ]
        }
    ]
};

class BudgetPage extends Component {
    render() {
        return (<div className="page-container">
            <div className="">
            
            </div>
            <DetailedViewPage categories={budgetItems.categories} />
        </div>);
    }
}

export default BudgetPage;