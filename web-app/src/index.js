import React from 'react';
import './index.css';
import '@coreui/coreui';
import 'bootstrap';
import 'react-bootstrap';
import App from './App';
import {render} from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import {loadTasks} from './actions/taskActions';
import {loadStatuses} from './actions/statusActions';
import {loadUsers} from './actions/userActions';

const store = configureStore();
store.dispatch(loadUsers());
store.dispatch(loadStatuses());
store.dispatch(loadTasks());

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
