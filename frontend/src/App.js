import React from "react";
import Sidebar from "./components/sidebar";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import UserTabs from "./components/UserTabs";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      {/* Sidebar on the left */}
      <Sidebar />
      
      {/* Content on the right */}
      <div className="content-container">
        <Navbar />
        <UserTabs />
        <Dashboard/>
      </div>
    </div>
  );
}

export default App;
