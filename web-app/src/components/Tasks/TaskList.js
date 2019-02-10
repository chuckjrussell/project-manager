import React, { Component } from 'react';
import TaskListItem from './TaskListItem'
import TasksHeader from './TasksHeader';
import '@coreui/coreui';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';

class TaskList extends Component{

    render(){
        var tasksHeader = (<TasksHeader/>);

        if( this.props.taskId ){
            tasksHeader = (<TasksHeader taskId={this.props.taskId}/>)
        }

        return(
            <div>
                {tasksHeader}
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
                                        <TaskListItem task={task} key={task.id}/>
                                    );
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    };
}

function mapStateToProps(state, ownProps){
    let taskId = ownProps.match.params.id;
    
    return {
        taskId: taskId,
        tasks: state.tasks,
        statuses: state.statuses,
        users: state.users
    }
};

export default withRouter(connect(mapStateToProps)(TaskList));