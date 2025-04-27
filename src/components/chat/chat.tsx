import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

interface Message {
  sender: 'user' | 'bot';
  text: string;
}

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Auto-scroll to the latest message when messages change
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMsg: Message = { sender: 'user', text: input };
    setMessages((prev) => [...prev, userMsg]);
    setLoading(true);
    setInput('');

    try {
      // Send the conversation history to the backend API for processing
      const response = await axios.post<{ reply: string }>('/api/chat', {
        prompt: input,
      });

      const botMsg: Message = { sender: 'bot', text: response.data.reply };
      setMessages((prev) => [...prev, botMsg]);
    } catch (error) {
      console.error(error);
      const errMsg: Message = { sender: 'bot', text: 'Something went wrong. Please try again.' };
      setMessages((prev) => [...prev, errMsg]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '20px auto', border: '1px solid #ddd', borderRadius: '8px', display: 'flex', flexDirection: 'column', height: '500px' }}>
      <div style={{ padding: '10px', borderBottom: '1px solid #ddd', backgroundColor: '#f5f5f5' }}>
        <h2>AI Mentor Chatbot</h2>
      </div>
      <div style={{ flex: 1, padding: '10px', overflowY: 'auto' }}>
        {messages.map((msg, idx) => (
          <div key={idx} style={{ display: 'flex', justifyContent: msg.sender === 'bot' ? 'flex-start' : 'flex-end', marginBottom: '8px' }}>
            <div style={{ padding: '8px 12px', borderRadius: '16px', maxWidth: '70%', backgroundColor: msg.sender === 'bot' ? '#eee' : '#007bff', color: msg.sender === 'bot' ? '#000' : '#fff' }}>
              {msg.text}
            </div>
          </div>
        ))}
        <div ref={endRef} />
      </div>
      <div style={{ display: 'flex', borderTop: '1px solid #ddd', padding: '10px' }}>
        <input
          type="text"
          placeholder="Ask your mentor..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyPress}
          disabled={loading}
          style={{ flex: 1, padding: '8px', borderRadius: '4px', border: '1px solid #ccc', marginRight: '8px' }}
        />
        <button
          onClick={sendMessage}
          disabled={loading}
          style={{ padding: '8px 16px', borderRadius: '4px', border: 'none', backgroundColor: '#007bff', color: '#fff', cursor: loading ? 'not-allowed' : 'pointer' }}
        >
          {loading ? 'Sending...' : 'Send'}
        </button>
      </div>
    </div>
  );
};

export default Chat;
