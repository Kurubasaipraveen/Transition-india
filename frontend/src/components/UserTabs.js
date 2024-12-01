import React from "react";
import "../styles/UserTabs.css"; // Ensure the CSS is linked

const UserTabs = () => {
  const users = [
    { initials: "CB", name: "Cheyenne Bergson", highlight: "pink" },
    { initials: "CB", name: "Jonathan Higgins", highlight: "yellow" },
    { initials: "CB", name: "Capt. Trunk" },
    { initials: "CB", name: "Hannibal Smith" },
    { initials: "CB", name: "Capt. Trunk" },
    { initials: "CB", name: "Hannibal Smith" },
  ];

  return (
    <div className="user-tabs">
      <div className="tabs-container">
        {users.map((user, index) => (
          <div
            key={index}
            className={`tab ${user.highlight ? `highlight-${user.highlight}` : ""}`}
          >
            <div className="avatar">{user.initials}</div>
            <div className="name">{user.name}</div>
          </div>
        ))}
      </div>
      <button className="messaging-button">
        <i className="bi bi-chat-dots"></i> Messaging<i class="bi bi-chevron-right"></i>
      </button>
    </div>
  );
};

export default UserTabs;
