import React, { useState } from 'react';
import { Send, Bot, User, Mic, MicOff } from 'lucide-react';

const AIAssistant = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'ai',
      content: 'Hello! I\'m Sanchaar AI, your procurement assistant. How can I help you today?',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isListening, setIsListening] = useState(false);

  const quickSuggestions = [
    'Suggest weekly grocery items',
    'Kya rate badhne wale hain?',
    'Best time to order tomatoes?',
    'Market trends for rice prices',
    'Bulk buying opportunities',
    'Seasonal vegetable calendar'
  ];

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      type: 'user',
      content: inputMessage,
      timestamp: new Date()
    };

    setMessages([...messages, newMessage]);
    setInputMessage('');

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        id: messages.length + 2,
        type: 'ai',
        content: getAIResponse(inputMessage),
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };

  const getAIResponse = (message: string) => {
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes('rate') || lowerMessage.includes('price')) {
      return 'Based on current market trends, onion prices are expected to increase by 15-20% in the next week due to monsoon delays. I recommend bulk ordering within the next 2 days. Tomato prices are stable and expected to drop by 10% next week.';
    } else if (lowerMessage.includes('tomato')) {
      return 'The best time to order tomatoes is typically Tuesday-Wednesday for weekend delivery. Current rate is ₹28/kg, expected to drop to ₹22-25/kg by next week. Quality is best from Nashik suppliers right now.';
    } else if (lowerMessage.includes('weekly') || lowerMessage.includes('grocery')) {
      return 'Based on your order history, I suggest: Rice (50kg), Onions (30kg), Tomatoes (25kg), Potatoes (40kg), Cooking Oil (20L), and Wheat Flour (25kg). This should cover your typical weekly needs with 12% savings through group orders.';
    } else {
      return 'I understand your query. Let me analyze the current market data and your purchase patterns to provide the best recommendation. Is there any specific item or category you\'d like me to focus on?';
    }
  };

  const handleQuickSuggestion = (suggestion: string) => {
    setInputMessage(suggestion);
  };

  const toggleVoiceInput = () => {
    setIsListening(!isListening);
    // Voice input logic would go here
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 h-[600px] flex flex-col">
        {/* Header */}
        <div className="flex items-center p-4 border-b border-gray-200">
          <div className="bg-purple-100 p-2 rounded-lg mr-3">
            <Bot className="h-6 w-6 text-purple-600" />
          </div>
          <div>
            <h1 className="text-lg font-semibold text-gray-900">Sanchaar AI Assistant</h1>
            <p className="text-sm text-gray-600">Your smart procurement advisor</p>
          </div>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`flex items-start space-x-2 max-w-xs lg:max-w-md ${message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                <div className={`p-2 rounded-full ${message.type === 'user' ? 'bg-blue-600' : 'bg-purple-100'}`}>
                  {message.type === 'user' ? (
                    <User className="h-4 w-4 text-white" />
                  ) : (
                    <Bot className="h-4 w-4 text-purple-600" />
                  )}
                </div>
                <div className={`p-3 rounded-lg ${
                  message.type === 'user' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 text-gray-900'
                }`}>
                  <p className="text-sm">{message.content}</p>
                  <p className={`text-xs mt-1 ${message.type === 'user' ? 'text-blue-100' : 'text-gray-500'}`}>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Suggestions */}
        <div className="px-4 py-2 border-t border-gray-100">
          <div className="flex flex-wrap gap-2">
            {quickSuggestions.map((suggestion, index) => (
              <button
                key={index}
                onClick={() => handleQuickSuggestion(suggestion)}
                className="px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded-full hover:bg-blue-100 hover:text-blue-700 transition-colors"
              >
                {suggestion}
              </button>
            ))}
          </div>
        </div>

        {/* Input Area */}
        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center space-x-2">
            <button
              onClick={toggleVoiceInput}
              className={`p-2 rounded-lg transition-colors ${
                isListening 
                  ? 'bg-red-100 text-red-600' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {isListening ? <MicOff className="h-5 w-5" /> : <Mic className="h-5 w-5" />}
            </button>
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Ask me anything about procurement, pricing, or market trends..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
              onClick={handleSendMessage}
              className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Send className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIAssistant;