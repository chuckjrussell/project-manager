import React from 'react';
import '../common/PageHeader.css';
import '@coreui/coreui';
import NewTask from './NewTask';

const TasksHeader = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="mr-auto">
                <div className="navbar-brand" href="/">Task List</div>
            </div>

            <div className="form-inline my-2 my-lg-0">
                <NewTask taskId={props.taskId}/>
            </div>
        </nav>
    );
};

export default TasksHeader;