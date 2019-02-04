import React, { Component } from 'react';
import TaskListItem from './TaskListItem'
import '@coreui/coreui';
import {connect} from 'react-redux';

class TaskList extends Component{

    statuses = [{
        id: 1, 
        status: "In Progress"
    },{
        id: 2, 
        status: "Blocked"
    },{
        id: 3, 
        status: "To Do"
    },{
        id: 4, 
        status: "Done"
    }];

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
                                    <TaskListItem task={task} statuses={this.statuses} key={task.id}/>
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
        tasks: state.tasks
    }
};

export default connect(mapStateToProps)(TaskList);