import React from 'react';

const Home = () => {
    return (
        <div className="page-container">
            <div className="card-container">
                <h1 className="display-4">Your Planner</h1>
                <p className="lead">Welcome to your own planning space for your project!  Here will be a dashboard where you can see your project at a glance.</p>
                <hr className="my-4"/>
                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                <p className="lead">
                    <a className="btn btn-primary btn-lg" href="/tasks" role="button">Tasks</a>
                </p>
            </div>
            </div>
    );
};

export default Home;