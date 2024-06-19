import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
    return (
        <div>
            <div className="dashboard-container">
                <header className="dashboard-header">
                    <div className="header-left">
                        <button className="back-button">&larr;</button>
                        <h1>Dashboard</h1>
                    </div>
                    <div className="header-right">
                        <button className="cart-button">&#128722;</button>
                        <button className="menu-button">&#9776;</button>
                    </div>
                </header>

                <div className="functions-section">
                    <div className="function-box">📜<br />Orders History</div>
                    <div className="function-box">💳<br />Payment Method</div>
                    <div className="function-box">🔍<br />Tracking</div>
                    <div className="function-box">📊<br />Statistics</div>
                    <div className="function-box">🛠<br />Settings</div>
                    <div className="function-box">🆘<br />Support</div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
