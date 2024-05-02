// src/ChatBot.js
import React, { useState } from 'react';

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSendMessage = () => {
    if (input.trim() !== '') {
      setMessages([...messages, { text: input, isUser: true }]);
      setInput('');
      // Call your function to handle bot response here
      handleBotResponse(input);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const handleBotResponse = (query) => {
    // Your logic for generating bot responses based on user query goes here
    // For simplicity, let's have some predefined responses
    const botResponse = `Sorry, I am just a simple bot and don't have real intelligence to respond. You said: "${query}"`;
    setMessages([...messages, { text: botResponse, isUser: false }]);
  };

  return (
    <div className="chat-bot">
      <div className="chat-window">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.isUser ? 'user' : 'bot'}`}>
            {message.text}
          </div>
        ))}
      </div>
      <input
        type="text"
        placeholder="Type your message..."
        value={input}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
};

export default ChatBot;
