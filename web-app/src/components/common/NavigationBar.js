import React from 'react';
import './NavigationBar.css';
import NavigationBarItem from './NavigationBarItem';

const NavigationBar = (props) => {
    return (
        <nav className="main-nav">
            <ul className="nav-items">
                <li><NavigationBarItem label="Home" href="/" iconClass="home"/></li>
                <li><NavigationBarItem label="Tasks" href="/tasks" iconClass="nav-icon-list-a"/></li>
                <li><NavigationBarItem label="Budget" href="/budget" iconClass="dollar"/></li>
                <li><NavigationBarItem label="Users" href="#" iconClass="persons"/></li>
            </ul>
        </nav>
    );
}

export default NavigationBar;