import { useRef, useState } from 'react';
import bot from 'shared/images/bot.svg';
import user from 'shared/images/user.svg';
import send from 'shared/images/send.svg';

import './AiChatStyles.css';

export const ChatComponent = () => {
  const [messages, setMessages] = useState([]);
  const chatInputRef = useRef(null);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const inputValue = chatInputRef.current.value;

    setMessages(prevMessages => [
      ...prevMessages,
      { isAi: false, value: inputValue },
    ]);

    chatInputRef.current.value = '';
    chatInputRef.current.focus();

    // Simulate loading
    setLoading(true);

    // Fetch data from server
    fetch('https://ai-assistant-backend.onrender.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prompt: inputValue,
      }),
    })
      .then(response => {
        setLoading(false);
        return response.json();
      })
      .then(data => {
        const parsedData = data?.bot.trim();
        setMessages(prevMessages => [
          ...prevMessages,
          { isAi: true, value: parsedData },
        ]);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setMessages(prevMessages => [
          ...prevMessages,
          { isAi: true, value: 'Something went wrong' },
        ]);
      });
  }

  return (
    <div className="chat_wrapper">
      <div id="chat_container">
        {messages.map((message, index) => (
          <div className={`wrapper ${message.isAi ? 'ai' : ''}`} key={index}>
            <div className="chat">
              <div className="profile">
                <img
                  src={message.isAi ? bot : user}
                  alt={message.isAi ? 'bot' : 'user'}
                />
              </div>
              <div className="message">{message.value}</div>
            </div>
          </div>
        ))}
        {loading && (
          <div className={`wrapper ai`}>
            <div className="chat">
              <div className="profile">
                <img src={bot} alt="bot" />
              </div>
              <div className="message">...</div>
            </div>
          </div>
        )}
      </div>

      <form className="chat-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="prompt"
          placeholder="Ask me..."
          ref={chatInputRef}
        />
        <button type="submit">
          <img src={send} alt="send" />
        </button>
      </form>
    </div>
  );
};
