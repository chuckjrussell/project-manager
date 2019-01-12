import React from 'react';

const Footer = () => {
    return (
        <footer className="app-footer">
            <div>
                <a href="/">Planner</a>
                <span>&copy; Chuck Russell</span>
            </div>
            <div className="ml-auto">
                <span>Powered by &nbsp;</span>
                <a href="https://coreui.io">CoreUI</a>
            </div>
        </footer>
    );
};

export default Footer;