import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import '@coreui/coreui';
import './TaskListItem.css';
import classNames from 'classnames';
import * as taskActions from '../../actions/taskActions';
import {Link} from 'react-router-dom';

class TaskListItem extends Component {

    constructor(props, context){
        super(props, context);
        this.state = {
            user: props.users.filter(u => u.id === this.props.task.assignee)[0],
            task: this.props.task
        }
        this.handleStatusChanged = this.handleStatusChanged.bind(this);
    }

    handleStatusChanged(event) {
        var task = this.state.task;
        task.status = event.target.value;
        this.setState(task);
        this.props.dispatch(taskActions.saveTask(this.state.task));
    }

    render(){
        var classes = classNames({
            'description-border-error': this.props.task.status === '2', //blocked
            'description-border-warning': this.props.task.status === '1' //in progress
        });

        return (
            <tr>
                <td className={classes}>
                    <Link to={'/tasks/' + this.props.task.id} className="text-truncate">{this.props.task.title}</Link>
                </td>
                <td>{this.state.user.firstName + ' ' + this.state.user.lastName}</td>
                <td>{this.props.task.dueDate}</td>
                <td>
                    <select className="form-control" value={this.props.task.status} onChange={this.handleStatusChanged}>
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

function mapStateToProps(state, ownProps) {
    return {
        statuses: state.statuses,
        users: state.users
    }
}

TaskListItem.propTypes = {
    task: PropTypes.object.isRequired
}

export default connect(mapStateToProps)(TaskListItem);