import React from "react";
import "../styles/Dashboard.css";
import ChatInterface from "./ChatInterface";
import AskCatura from "./AskCatura";
const Dashboard = () => {
  return (
    <div className="container-row">
    <div className="dashboard">
      <div className="user-header">
        <div className="user-avatar">CB</div>
        <div>
          <h3 className="user-name">Hannibal Smith</h3>
          <p className="user-address">1 Market Street San Francisco, CA 94105</p>
        </div>
      </div>
      
      <div className="info-card">
        <div className="card-header">
          <span>Customer ID</span>
          <span>12345</span>
          <i className="bi bi-three-dots-vertical"></i>
        </div>
        <div className="card-header">
          <span>Email Address</span>
          <span>sample@gmail.com</span>
          <i className="bi bi-three-dots-vertical"></i>
        </div>
        <div className="card-header">
          <span>Phone Number</span>
          <span>0987654321</span>
          <i className="bi bi-three-dots-vertical"></i>
        </div>
        
        <div className="add-button">+ Add</div>
      </div>

      <div className="info-card">
        <div className="card-header">
          <span>Loyalty Tier</span>
          <span>Silver</span>
          <i className="bi bi-three-dots-vertical"></i>
        </div>
        <div className="card-header">
          <span>Segment</span>
          <span>Sleepy Customer</span>
          <i className="bi bi-three-dots-vertical"></i>
        </div>
        <div className="add-button">+ Add</div>
      </div>

      <div className="info-card">
        <div className="card-header">
          <span>Lifetime Value</span>
          <span>$1M</span>
          <i className="bi bi-three-dots-vertical"></i>
        </div>
        <div className="card-header">
          <span>Propencity to Purchage</span>
          <span></span>
          <i className="bi bi-three-dots-vertical"></i>
        </div>
        
        <div className="add-button">+ Add</div>
      </div>
      <div className="info-card">
        <div className="card-header">
          <span>Engagement Score</span>
          <span></span>
          <i className="bi bi-three-dots-vertical"></i>
        </div>
        
        <div className="add-button">+ Add</div>
      </div>

      <div className="action-buttons">
        <button className="assign-button">Assign other Agent</button>
        <button className="add-widget-button">Add New Widget</button>
      </div>
      </div>
      <ChatInterface/>
      <AskCatura/>
    </div>

    
  );
};

export default Dashboard;
