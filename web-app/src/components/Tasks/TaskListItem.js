import React, { Component } from 'react';
import '@coreui/coreui';
import './TaskListItem.css';

var classNames = require('classnames');

class TaskListItem extends Component {

    constructor(props, context){
        super(props, context);
        this.state = {
            user: props.users.filter(u => u.id === this.props.task.assignee)[0]
        }
    }

    render(){

        var classes = classNames({
            'description-border-error': this.props.task.status === '3', //blocked
            'description-border-warning': this.props.task.status === '1' //in progress
        });

        return (
            <tr>
                <td className={classes}>
                    {this.props.task.description}
                </td>
                <td>{this.state.user.firstName + ' ' + this.state.user.lastName}</td>
                <td>{this.props.task.dueDate}</td>
                <td>
                    <select className="form-control" value={this.props.task.status} readOnly>
                        {
                            this.props.statuses.map((status) =>{
                                return(
                                    <option value={status.id} key={status.id}>{status.status}</option>
                                )
                            })
                        }
                    </select>
                </td>
                <td>
                    <button type="button" className="btn btn-danger">Delete</button>
                </td>
            </tr>
        );
    }
}

export default TaskListItem;