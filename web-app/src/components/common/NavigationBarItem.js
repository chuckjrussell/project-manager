import React from 'react';
import PropTypes from 'prop-types';
import './NavigationBarItem.css';
import { NavLink } from 'react-router-dom';

const NavigationBarItem = (props) => {

    var className = 'nav-icon fi fi-' + props.iconClass;

    return (
        <NavLink to={props.href}  className="nav-link" activeClassName="active">
            <div className="nav-item">
                <i className={className}></i>
                <div className="nav-item-text">{props.label}</div>
            </div>
        </NavLink>
    );
}

NavigationBarItem.propTypes = {
    label: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    iconClass: PropTypes.string.isRequired
}

export default NavigationBarItem;