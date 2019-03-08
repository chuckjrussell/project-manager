import { PieChart, Pie } from 'recharts';
import React from 'react';

  const data02 = [
    {
      "name": "Group A",
      "value": 2400
    },
    {
      "name": "Group B",
      "value": 4567
    },
    {
      "name": "Group C",
      "value": 1398
    },
    {
      "name": "Group D",
      "value": 9800
    },
    {
      "name": "Group E",
      "value": 3908
    },
    {
      "name": "Group F",
      "value": 4800
    }
  ];

const BudgetSummary = (props) => {
    return (
        <div>
            <div className="category-header">
                <h4>Totals</h4>
                <div className="category-options">
                    <ul>
                        <li><a href="#new">Status</a></li>
                        <li><a href="#edit">Category</a></li>
                    </ul>
                </div>
            </div>
            <PieChart width={250} height={250}>
                <Pie data={data02} dataKey="value" nameKey="name" outerRadius={80} fill="#82ca9d" label />
            </PieChart>

            <table className="table table-hover">
                <thead>
                    <tr>
                        <td>Item</td>
                        <td>Amount</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Paid</td>
                        <td>100</td>
                    </tr>
                    <tr>
                        <td>Discount</td>
                        <td>100</td>
                    </tr>
                    <tr>
                        <td>Deposit</td>
                        <td>100</td>
                    </tr>
                    <tr>
                        <td>Refundable</td>
                        <td>100</td>
                    </tr>
                    <tr>
                        <td>Outstanding</td>
                        <td>100</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default BudgetSummary;