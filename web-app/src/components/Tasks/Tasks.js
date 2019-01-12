import React, { Component } from 'react';
import TasksHeader from './TasksHeader';
import TaskList from './TaskList';
import { BrowserRouter } from 'react-router-dom';
import {Route} from 'react-router';

class Tasks extends Component{


    render(){
        return(
            <div>
                <BrowserRouter>
                <div className="container">
                    <TasksHeader title="Tasks"/>
                    <Route path='/' component={TaskList} />
                </div>
                </BrowserRouter>
                
            </div>
        );
    };
}

export default Tasks;