import React, { Component } from 'react';
import './App.css';
import '@coreui/coreui';
import Tasks from './components/Tasks/Tasks';
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
              <Route path='/tasks' component={Tasks} />
            </div>
          </div>
          <Footer/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;


