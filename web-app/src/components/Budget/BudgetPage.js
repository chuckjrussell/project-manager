import React, {Component} from 'react';
import DetailedViewPage from './DetailedView/DetailedViewPage';
import PageHeader from '../common/PageHeader';
import PageBody from '../common/PageBody';


class BudgetPage extends Component {
    render() {
        return (
        <div>
            <PageHeader title="Budget" />

            <PageBody>
                <DetailedViewPage/>
            </PageBody>
        </div>);
    }
}

export default BudgetPage;