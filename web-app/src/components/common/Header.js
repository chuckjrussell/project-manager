import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="navbar-nav mr-auto">
                <a className="navbar-brand" href="/">Planner</a>
                <div className="header-nav-bar">
                    <NavLink exact to="/" className="nav-item nav-link" activeClassName="active">Home</NavLink>
                    <NavLink to="/tasks" className="nav-item nav-link" activeClassName="active">Tasks</NavLink>
                    <NavLink to="/budget" className="nav-item nav-link" activeClassName="active">Budget</NavLink>
                </div>
            </div>

            <div className="form-inline my-2 my-lg-0">
                <span className="navbar-text">
                    Chuck Russell
                </span>
                <img className="avatar-image" src="https://placeimg.com/75/75/people" alt="avatar"/>
            </div>
        </nav>
    );
};

export default Header;