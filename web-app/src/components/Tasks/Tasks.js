import React, { Component } from 'react';
import TaskList from './TaskList';
import { BrowserRouter, Switch } from 'react-router-dom';
import {Route} from 'react-router';

class TasksPage extends Component{
    render(){
        return(
            <div>
                <BrowserRouter>
                    <div className="container">
                        <Switch>
                            <Route path='/tasks/:id' component={TaskList} />
                            <Route path='/tasks' component={TaskList} />
                        </Switch>
                    </div>
                </BrowserRouter>
                
            </div>
        );
    };
}

export default TasksPage;