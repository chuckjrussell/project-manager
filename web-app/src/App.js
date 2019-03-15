import React, { Component } from 'react';
import 'bootstrap';
import '@coreui/coreui';
import '@coreui/coreui/dist/css/bootstrap.css';
import '@coreui/coreui/dist/css/coreui.css';
import './App.css';
import './common.css';
import TasksPage from './components/Tasks/Tasks';
import BudgetPage from './components/Budget/BudgetPage';
import Home from './components/Home/Home';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import { BrowserRouter } from 'react-router-dom';
import {Route} from 'react-router';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app-container">
          <div className="main-container">
          <Header />
            <div className="container">
                <Route exact path='/' component={Home} />
                <Route path='/tasks' component={TasksPage} />
                <Route path='/budget' component={BudgetPage} />
            </div>
          </div>
          {/* <Footer/> */}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;


