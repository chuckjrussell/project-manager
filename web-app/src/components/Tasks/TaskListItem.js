import React, { Component } from 'react';
import '@coreui/coreui';
import './TaskListItem.css'
import {Dropdown, MenuItem} from 'react-bootstrap'

var classNames = require('classnames');

class TaskListItem extends Component {
    render(){

        var classes = classNames({
            'description-border-error': this.props.task.status === 3, //blocked
            'description-border-warning': this.props.task.status === 1 //blocked
        });

        return (
            <tr>
                <td className={classes}>
                    {this.props.task.description}
                </td>
                <td>{this.props.task.assignee}</td>
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