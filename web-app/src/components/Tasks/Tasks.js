import React, { Component } from 'react';
import TasksHeader from './TasksHeader';
import TaskList from './TaskList';
import { BrowserRouter, Switch } from 'react-router-dom';
import {Route} from 'react-router';

class TasksPage extends Component{


    render(){
        return(
            <div>
                <BrowserRouter>
                    <div className="container">
                        <TasksHeader title="Tasks"/>
                        <Switch>
                            <Route path='/' component={TaskList} />
                            <Route path='/:id' component={TaskList} />
                        </Switch>
                    </div>
                </BrowserRouter>
                
            </div>
        );
    };
}

export default TasksPage;