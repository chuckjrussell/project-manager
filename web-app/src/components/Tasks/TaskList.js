import React, { Component } from 'react';
import TaskListItem from './TaskListItem'
import '@coreui/coreui';

class TaskList extends Component{

    tasks = [{
        id: 1, 
        description: "Duis aute irure dolor in reprehenderit", 
        dueDate: "11-8-2018", 
        assignee: "Cassie", 
        category: 2, 
        status: 1
      },{
        id: 2, 
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", 
        dueDate: "11-8-2018", 
        assignee: "Chuck", 
        category: 2, 
        status: 3
      }
    ];

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
                            this.tasks.map((task) => {
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

export default TaskList;