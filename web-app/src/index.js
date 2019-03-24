import React from 'react';
import 'bootstrap';
import '@coreui/coreui';
import '@coreui/coreui/dist/css/bootstrap.css';
import '@coreui/coreui/dist/css/coreui.css';
import './index.css';
import 'react-bootstrap';
import 'fontisto/css/fontisto/fontisto.css';
import App from './App';
import {render} from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import {loadTasks} from './actions/taskActions';
import {loadStatuses} from './actions/statusActions';
import {loadUsers} from './actions/userActions';
import {loadCategories} from './actions/categoryActions';

const store = configureStore();
store.dispatch(loadUsers());
store.dispatch(loadStatuses());
store.dispatch(loadTasks());
store.dispatch(loadCategories());

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
