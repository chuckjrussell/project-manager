import React, { Component } from 'react';
import TaskList from './TaskList';
import { BrowserRouter, Switch } from 'react-router-dom';
import {Route} from 'react-router';
import PageHeader from '../common/PageHeader';
import PageBody from '../common/PageBody';

class TasksPage extends Component{
    render(){
        return(
            <div>
                <PageHeader title="Tasks" />
                <PageBody>
                    <BrowserRouter>
                        <Switch>
                            <Route path='/tasks/:id' component={TaskList} />
                            <Route path='/tasks' component={TaskList} />
                        </Switch>
                    </BrowserRouter>
                </PageBody>
                
            </div>
        );
    };
}

export default TasksPage;