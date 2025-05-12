import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

const botResponses = {
  internships: "We offer internships in Software Development, Data Science, UI/UX Design, and more. Let me know your area of interest!",
  jobs: "Explore fresher and experienced roles across cities. Let me know your preferred job type or location.",
  practice: "Our practice section includes Coding, Aptitude, Reasoning, and Resume Builder sections to help you prepare.",
  account: "Create an account with Sign Up, or log in if you already have one.",
  contact: "For support, reach us at support@censkillconnect.com",
  default: ["I'm here to help! You can ask me about internships, jobs, practice tests, or account-related questions.", 
            "Feel free to ask about any internships, job roles, or practice sessions you’re interested in.",
            "I'm your assistant! Ask me anything related to jobs, internships, or practice options."]
};

const GEMINI_API_KEY = "AIzaSyAyTvKJ-7x-x93uiAgfYR3YmVWImVYFreY"; // Update with your actual key

async function fetchGeminiResponse(query, history) {
  try {
    const response = await fetch("GEMINI_API_ENDPOINT", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${GEMINI_API_KEY}`
      },
      body: JSON.stringify({ query, history })
    });

    if (!response.ok) {
      console.error(`API error: ${response.status} - ${response.statusText}`);
      return null;
    }

    const data = await response.json();
    console.log("Gemini API response:", data); // Log the raw API response

    return data?.answer || null;
  } catch (error) {
    console.error("Fetch error:", error);
    return null;
  }
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi! How can I help you today?", isBot: true }
  ]);
  const [input, setInput] = useState('');

  const handleSend = async () => {
    if (!input.trim()) return;

    setMessages(prev => [...prev, { text: input, isBot: false }]);
    const history = messages.map(msg => ({ role: msg.isBot ? 'assistant' : 'user', content: msg.text }));

    // Try fetching a response from Gemini
    let response = await fetchGeminiResponse(input, history);

    // Use regex keyword-based fallback if Gemini response is unavailable
    if (!response) {
      const keywordMatch = Object.entries(botResponses).find(([key]) => 
        new RegExp(`\\b${key}\\b`, 'i').test(input)
      );
      response = keywordMatch ? keywordMatch[1] : botResponses.default[Math.floor(Math.random() * botResponses.default.length)];
    }

    setMessages(prev => [...prev, { text: response, isBot: true }]);
    setInput('');
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 bg-red-500 text-white p-3 rounded-full shadow-lg hover:bg-red-600 transition-all z-50"
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      {isOpen && (
        <div className="fixed bottom-20 right-4 w-80 bg-gray-900 rounded-xl shadow-2xl border border-gray-700 z-50">
          <div className="flex items-center justify-between p-4 border-b border-gray-700">
            <h3 className="font-semibold">CenSkill Assistant</h3>
            <button onClick={() => setIsOpen(false)}>
              <X className="w-5 h-5 text-gray-400 hover:text-white" />
            </button>
          </div>

          <div className="h-96 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    msg.isBot
                      ? 'bg-gray-800 text-white'
                      : 'bg-red-500 text-white'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 border-t border-gray-700">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type your message..."
                className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <button
                onClick={handleSend}
                className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
