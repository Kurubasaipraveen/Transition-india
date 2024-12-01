import React from "react";
import "../styles/ActionLauncher.css";

const ActionLauncher = () => {
  return (
    <div className="action-launcher">
      <h3>Action Launcher</h3>
      <input type="text" placeholder="Search actions..." className="search-bar" />
      <div className="action-buttons">
        <button className="primary">Add Action</button>
        <button>Fee Reversal</button>
        <button>Retail Onboarding</button>
        <button>Address Update</button>
      </div>
    </div>
  );
};

export default ActionLauncher;
