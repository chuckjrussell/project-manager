import React, { Component } from 'react';
import TaskListItem from './TaskListItem'
import '@coreui/coreui';
import {connect} from 'react-redux';

class TaskList extends Component{

    render(){
        return(
            <div>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <td>Description</td>
                            <td>Assignee</td>
                            <td>Due Date</td>
                            <td>Status</td>
                            <td>Delete</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.tasks.map((task) => {
                                return (
                                    <TaskListItem task={task} statuses={this.props.statuses} users={this.props.users} key={task.id}/>
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>
        );
    };
}

function mapStateToProps(state, ownProps){
    return {
        tasks: state.tasks,
        statuses: state.statuses,
        users: state.users
    }
};

export default connect(mapStateToProps)(TaskList);