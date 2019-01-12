import React from 'react';
import './PageHeader.css';

const PageHeader = (props) => {
    return (
        <div className="page-header-container">
            <h1>{props.title}</h1>
        </div>
    );
};

export default PageHeader;