import { useState, useEffect } from 'react';
import { FaRobot, FaTimes, FaPaperPlane } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import './Chatbot.css';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { 
      text: 'Hello! Welcome to KalaAds. How can I help you today?', 
      sender: 'bot',
      time: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  // Show popup on first visit
  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisitedKalaAds');
    if (!hasVisited) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        localStorage.setItem('hasVisitedKalaAds', 'true');
      }, 10000); // Show after 10 seconds
      return () => clearTimeout(timer);
    }
  }, []);

  const handleSend = () => {
    if (input.trim() === '') return;

    // Add user message
    const userMessage = { 
      text: input, 
      sender: 'user',
      time: new Date() 
    };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate bot response after delay
    setTimeout(() => {
      const responses = [
        "Thanks for your message! Our team will get back to you soon.",
        "I've noted your query. Would you like me to connect you with our sales team?",
        "That's a great question! Let me find the right information for you.",
        "We specialize in that service! Can you share more details about your requirements?"
      ];
      const botMessage = { 
        text: responses[Math.floor(Math.random() * responses.length)],
        sender: 'bot',
        time: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="chatbot-container">
      {/* Chatbot toggle button */}
      <motion.button
        className="chatbot-toggle"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isOpen ? <FaTimes /> : <FaRobot />}
      </motion.button>

      {/* Chatbot window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="chatbot-window"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: 'spring', damping: 25 }}
          >
            <div className="chatbot-header">
              <h3>KalaAds Assistant</h3>
              <button onClick={() => setIsOpen(false)}>
                <FaTimes />
              </button>
            </div>

            <div className="chatbot-messages">
              {messages.map((msg, index) => (
                <motion.div
                  key={index}
                  className={`message ${msg.sender}`}
                  initial={{ opacity: 0, x: msg.sender === 'user' ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="message-content">
                    {msg.text}
                    <span className="message-time">
                      {msg.time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                </motion.div>
              ))}
              {isTyping && (
                <div className="message bot typing">
                  <div className="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              )}
            </div>

            <div className="chatbot-input">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
              />
              <button onClick={handleSend}>
                <FaPaperPlane />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Chatbot;