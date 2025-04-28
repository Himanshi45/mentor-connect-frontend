"use client";

import { useState } from "react";
import "./chat.css";

export default function ChatPage() {
  const [messages, setMessages] = useState([
    { id: 1, sender: "mentor", text: "Hello! How can I help you today?" },
    { id: 2, sender: "mentee", text: "I need help with my project." },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const handleSend = () => {
    if (!newMessage.trim()) return;

    const newMsg = { id: Date.now(), sender: "mentee", text: newMessage };
    setMessages((prev) => [...prev, newMsg]);
    setNewMessage("");

    // 👇 Auto-reply after 1 second
    setTimeout(() => {
      const mentorReply = { id: Date.now() + 1, sender: "mentor", text: "Thanks for your message!" };
      setMessages((prev) => [...prev, mentorReply]);
    }, 1000);
  };

  return (
    <div className="chatContainer">
      <div className="chatHeader">💬 Chat</div>

      <div className="chatBody">
        {messages.map((msg) => (
          <div key={msg.id} className={`message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
      </div>

      <div className="chatInputArea">
        <input
          className="chatInput"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message..."
        />
        <button className="sendButton" onClick={handleSend}>Send</button>
      </div>
    </div>
  );
}
