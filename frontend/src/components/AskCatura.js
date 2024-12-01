import React from "react";
import "../styles/AskCatura.css";
import ActionLauncher from "./ActionLauncher";
import CaseFavorite from "./CaseFavorite";
const AskCatura = () => {
  return (
    <div className="last-column">
    <div className="ask-catura">
      <div className="ask-header">
        <h3>Ask Catura</h3>
        <div className="ask-actions">
          <button>WhatsApp</button>
          <button>Greetings</button>
        </div>
      </div>
      <div className="ask-content">
        <div className="greeting-template">
          <p>Lorem ipsum dolor sit amet consectetur. Et tincidunt...</p>
          <div className="greeting-buttons">
            <button>Copy to Send</button>
            <button>Preview</button>
          </div>
        </div>
        <div className="ask-input">
          <input type="text" placeholder="Type a message..." />
          <button>➤</button>
        </div>
      </div>
    </div>
    <ActionLauncher/>
    <CaseFavorite/>
    </div>
  );
};

export default AskCatura;
