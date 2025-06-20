import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, User, Bot } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm your AI assistant from Codigohunt Solutions. How can I help you with our IT consultancy services today?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');

  const predefinedResponses = {
    'services': "We offer comprehensive IT services including DevOps Consulting, App Development, Web Development, Cybersecurity, Digital Marketing, Hosting & Deployment, ERP & CMS Solutions, Custom Software Development, and IT Support & Managed Services. Which service interests you most?",
    'consultancy': "Our consultancy services include AWS Cloud Consultancy, DevSecOps Advisory & Implementation, Cybersecurity Risk & Compliance, and Business Strategy & Growth Consultancy. Would you like to know more about any specific consultancy?",
    'contact': "You can reach us at +91 9461232921 or email us at official@codigohunt.com. Our office is located at CBC 13 First Floor, Vikramaditya Marg, Jaipur, Rajasthan. Would you like to schedule a consultation?",
    'pricing': "We offer competitive pricing tailored to your specific needs. Each project is unique, so we provide customized quotes. Please contact us at +91 9461232921 for a detailed discussion about your requirements.",
    'team': "Our team consists of experienced directors: Ankit Sharma (DevOps Engineer & Development Expert with 5+ years), Akshay Gupta (Cloud, DevOps & DevSecOps Expert with 6+ years), and Vaibhav Patidar (DevOps and IT Services & Support Expert with 5+ years).",
    'experience': "We have successfully delivered 50+ projects for 10+ global clients across 20+ industry domains with a 98% client retention rate. Our team brings enterprise-level expertise to every project.",
    'devops': "Our DevOps services include CI/CD pipeline setup, monitoring solutions, cloud infrastructure management, and OpenShift implementations. We help streamline your development workflow and improve deployment efficiency.",
    'cloud': "We specialize in AWS cloud solutions, cloud migration, infrastructure as code, containerization, and cloud security. Our cloud experts can help optimize your cloud infrastructure for performance and cost.",
    'security': "Our cybersecurity services cover risk assessment, compliance auditing, security implementation, threat monitoring, and security training. We ensure your systems are protected against modern cyber threats."
  };

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    for (const [key, response] of Object.entries(predefinedResponses)) {
      if (message.includes(key)) {
        return response;
      }
    }

    if (message.includes('hello') || message.includes('hi')) {
      return "Hello! Welcome to Codigohunt Solutions. I'm here to help you learn about our IT consultancy services. What would you like to know?";
    }

    if (message.includes('help')) {
      return "I can help you with information about our services, consultancy offerings, team, pricing, or contact details. What specific area interests you?";
    }

    return "Thank you for your question! For detailed information about your specific needs, I recommend contacting our team directly at +91 9461232921 or official@codigohunt.com. Our experts can provide personalized assistance.";
  };

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text: inputText,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');

    // Simulate bot response delay
    setTimeout(() => {
      const botResponse: Message = {
        id: Date.now() + 1,
        text: getBotResponse(inputText),
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-r from-electric-pink to-azure text-white rounded-full shadow-lg flex items-center justify-center z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={isOpen ? { rotate: 0 } : { rotate: 0 }}
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <MessageCircle className="w-6 h-6" />
          </motion.div>
        )}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-24 right-6 w-80 sm:w-96 h-96 bg-white dark:bg-gray-800 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700 flex flex-col z-50"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-electric-pink to-azure text-white p-4 rounded-t-lg">
              <div className="flex items-center space-x-2">
                <Bot className="w-6 h-6" />
                <div>
                  <h3 className="font-semibold">Codigohunt AI Assistant</h3>
                  <p className="text-xs opacity-90">Always here to help</p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`flex items-start space-x-2 max-w-xs ${message.isBot ? '' : 'flex-row-reverse space-x-reverse'}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      message.isBot 
                        ? 'bg-gradient-to-r from-electric-pink to-azure text-white' 
                        : 'bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-300'
                    }`}>
                      {message.isBot ? <Bot className="w-4 h-4" /> : <User className="w-4 h-4" />}
                    </div>
                    <div className={`px-3 py-2 rounded-lg text-sm ${
                      message.isBot
                        ? 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
                        : 'bg-gradient-to-r from-electric-pink to-azure text-white'
                    }`}>
                      {message.text}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-electric-pink dark:bg-gray-700 dark:text-white text-sm"
                />
                <motion.button
                  onClick={handleSendMessage}
                  className="px-4 py-2 bg-gradient-to-r from-electric-pink to-azure text-white rounded-lg hover:shadow-lg transition-shadow"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Send className="w-4 h-4" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;