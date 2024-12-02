import React from "react";
import "../styles/ChatInterface.css";

const ChatInterface = () => {
  return (
    <div className="chat-interface">
      <div className="chat-tabs">
        <button className="tab active">Conversation</button>
        <button className="tab">Address Update</button>
        <button className="tab">Fee Reversal</button>
        <button className="tab">Retention</button>
        <button className="escalate-button">Escalate</button>
      </div>

      <div className="chat-conversation">
        <div className="conversation-header">
          <span className="active-tab">Conversation</span>
          <span>Attachment</span>
        </div>

        <div className="messages">
          <div className="message received">
            <div className="message-header">
              <span className="message-avatar">CB</span>
              <span className="message-author">Rachel Adams</span>
              <span className="message-time">9:08 PM</span>
              <span className="message-source">Received By WhatsApp</span>
            </div>
            <p className="message-content">
              Lorem ipsum dolor sit amet consectetur. Et tincidunt odio vivamus ac aliquam. Placerat maecenas quis ut elementum praesent imperdiet. Egestas mattis pellentesque nibh dui sed malesuada dolor eget ipsum. Molestie nam morbi id arcu volutpat arcu.
            </p>
          </div>

          <div className="message sent">
            <div className="message-header">
              <span className="message-avatar">HK</span>
              <span className="message-author">You</span>
              <span className="message-time">27 Jul, 2024</span>
              <span className="message-source">Sent By WhatsApp</span>
            </div>
            <p className="message-content">
              Lorem ipsum dolor sit amet consectetur. Et tincidunt odio vivamus ac aliquam. Placerat maecenas quis ut elementum praesent imperdiet. Egestas mattis pellentesque nibh dui sed malesuada dolor eget ipsum. Molestie nam morbi id arcu volutpat arcu.
            </p>
          </div>
        </div>
      </div>

      <div className="message-input-section">
        <div className="message-options">
          <label>
            <input type="checkbox" /> SMS
          </label>
          <label>
            <input type="checkbox" /> WhatsApp
          </label>
          <label>
            <input type="checkbox" /> Email
          </label>
        </div>
        <div className="input-container">
          <textarea
            placeholder="Type a message..."
            className="message-input"
          ></textarea>
          <div className="input-actions">
            <button className="attachment-button">
              <i className="bi bi-paperclip"></i>
            </button>
            <button className="send-button">
              <i className="bi bi-send"></i> Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
