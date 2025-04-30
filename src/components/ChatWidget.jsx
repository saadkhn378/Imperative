import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSend, FiX } from 'react-icons/fi';

export default function ChatWidget() {
  const [showPrompt, setShowPrompt]     = useState(true);
  const [showChat, setShowChat]         = useState(false);
  const [messages, setMessages]         = useState([]);
  const [input, setInput]               = useState('');
  const [stage, setStage]               = useState(0);
  const [chosenOption, setChosenOption] = useState('');
  const [chosenSector, setChosenSector] = useState('');
  const endRef                          = useRef();

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const closeChat = () => {
    setShowChat(false);
    setShowPrompt(true);
    setMessages([]);
    setInput('');
    setStage(0);
  };

  const startChat = () => {
    setShowPrompt(false);
    setShowChat(true);
    setStage(1);
    // Stage 1: dropdown
    setMessages([
      {
        from: 'bot',
        text: "Can you tell me what you’re looking for?",
        dropdown: [
          'Service & Product Offerings',
          'Industry Solutions',
          'Case Studies & Resources',
          'Company News & Events',
          'About Imperative',
          'Partnership',
          'Investor Information',
          'Careers',
         
        ]
      }
    ]);
  };

  // Handle any user text submission
  const onUserMessage = text => {
    const now = new Date();
    setMessages(msgs => [...msgs, { from: 'user', text, time: now }]);
    setInput('');
    advanceStage(text);
  };

  // Advance through stages
  const advanceStage = text => {
    if (stage === 1) {
      // dropdown chosen
      setChosenOption(text);
      setStage(2);
      setTimeout(() => {
        setMessages(msgs => [
          ...msgs,
          {
            from: 'bot',
            text: "Great! Please choose your sector:",
            buttons: ['Banking', 'Healthcare', 'Education', 'Logistics', 'Retail']
          }
        ]);
      }, 500);
    }
    else if (stage === 2) {
      // sector chosen
      setChosenSector(text);
      setStage(3);
      setTimeout(() => {
        setMessages(msgs => [
          ...msgs,
          {
            from: 'bot',
            text: `What specifically are you looking for in ${text}?`
          }
        ]);
      }, 500);
    }
    else if (stage === 3) {
      // requirement described
      setStage(4);
      setTimeout(() => {
        setMessages(msgs => [
          ...msgs,
          {
            from: 'bot',
            text: 'Thanks! Could you share your email or phone so our specialist can contact you?'
          }
        ]);
      }, 500);
    }
    else if (stage === 4) {
      // contact captured
      setStage(5);
      setTimeout(() => {
        setMessages(msgs => [
          ...msgs,
          {
            from: 'bot',
            text: 'All set! We’ll reach out to you shortly. Thank you!'
          }
        ]);
      }, 500);
    }
  };

  // Handle dropdown change
  const onDropdownChange = e => {
    const val = e.target.value;
    if (!val) return;
    onUserMessage(val);
  };

  // Handle button clicks
  const onButtonClick = label => {
    onUserMessage(label);
  };

  return (
    <>
      {/* Initial Prompt Bubble */}
      <div className="fixed bottom-4 right-4 z-50">
        <AnimatePresence>
          {showPrompt && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              <div onClick={startChat} className="relative cursor-pointer">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-white flex items-center justify-center border-2 border-orange-500 z-10">
                  <FiSend className="text-orange-500" />
                </div>
                <div className="bg-white p-4 pt-4 rounded-2xl shadow-lg w-[280px] border border-gray-100">
                  <p className="text-center text-gray-800 text-sm">
                    Have a requirement? Let's chat and find the best solution for your business.
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Expanded Chat Window */}
      <AnimatePresence>
        {showChat && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-4 right-4 z-50 flex flex-col bg-white w-80 h-96 rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-400 text-white">
              <span className="text-lg font-semibold">Imperative Chatbot</span>
              <button onClick={closeChat} className="p-1 hover:bg-orange-600 rounded-full">
                <FiX size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 px-4 py-2 overflow-y-auto space-y-3 scrollbar-thin scrollbar-thumb-gray-300">
              {messages.map((m, i) => (
                <div key={i}>
                  {/* Dropdown stage */}
                  {m.dropdown && (
                    <div className="space-y-2">
                      <p className="text-gray-800 text-sm">{m.text}</p>
                      <select
                        onChange={onDropdownChange}
                        defaultValue=""
                        className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
                      >
                        <option value="" disabled>
                          Select one
                        </option>
                        {m.dropdown.map(opt => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}

                  {/* Button stage */}
                  {m.buttons && (
                    <div className="space-y-2">
                      <p className="text-gray-800 text-sm">{m.text}</p>
                      <div className="flex flex-wrap gap-2">
                        {m.buttons.map(btn => (
                          <button
                            key={btn}
                            onClick={() => onButtonClick(btn)}
                            className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-sm hover:bg-orange-200 transition"
                          >
                            {btn}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Simple text message */}
                  {!m.dropdown && !m.buttons && (
                    <div className={`flex ${m.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-[70%] px-3 py-2 rounded-xl shadow ${
                          m.from === 'user'
                            ? 'bg-orange-500 text-white'
                            : 'bg-gray-100 text-gray-800'
                        }`}
                      >
                        <p className="text-sm">{m.text}</p>
                        {m.time && (
                          <span className="block mt-1 text-[10px] text-white text-right">
                            {new Date(m.time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                          </span>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              ))}
              <div ref={endRef} />
            </div>

            {/* Input (only for free-text stages 3 & 4) */}
            {(stage === 3 || stage === 4) && (
              <div className="px-4 py-2 border-t border-gray-200 flex items-center bg-white">
                <input
                  type="text"
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && onUserMessage(input.trim())}
                  placeholder={
                    stage === 3
                      ? `Describe your need in ${chosenSector}`
                      : 'Email or phone'
                  }
                  className="flex-1 bg-gray-50 border border-gray-300 rounded-full px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300"
                />
                <button onClick={() => onUserMessage(input.trim())} className="ml-2 p-2 text-white bg-orange-500 rounded-full hover:bg-orange-600 transition">
                  <FiSend />
                </button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
