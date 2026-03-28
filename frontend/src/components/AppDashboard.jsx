import React, { useState } from 'react';
import { Mic, Send, LogOut, TrendingUp, TrendingDown, Wallet, User as UserIcon } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AppDashboard({ onLogout }) {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'agent', text: 'Muraho! I am your 24/7 financial coach. How can I help you today? You can type your MoMo SMS or tell me your recent expenses.', timestamp: '10:00 AM' }
  ]);
  const [inputText, setInputText] = useState('');
  const [isRecording, setIsRecording] = useState(false);

  // Hardcoded values in RWF, no decimals per user rule
  const totalBalance = '150,000 RWF';
  const totalIncome = '450,000 RWF';
  const totalExpenses = '300,000 RWF';

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const newUserMessage = { id: Date.now(), sender: 'user', text: inputText, timestamp: new Date().toLocaleTimeString([], {timeStyle: 'short'}) };
    setMessages([...messages, newUserMessage]);
    setInputText('');

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = { 
        id: Date.now() + 1, 
        sender: 'agent', 
        text: 'I have logged that transaction. I notice you spent a lot on transport this week, let\'s look at ways to cut that down.', 
        timestamp: new Date().toLocaleTimeString([], {timeStyle: 'short'}) 
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1500);
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
    // Real implementation would connect to Gemini Live Multimodal API
  };

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col font-sans">
      {/* Top Navigation */}
      <header className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between sticky top-0 z-10 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-lg">FA</div>
          <h1 className="text-xl font-bold text-slate-800 hidden sm:block">Financial Assistant</h1>
        </div>
        <div className="flex items-center gap-4">
          <div className="h-10 w-10 bg-slate-100 rounded-full flex items-center justify-center border border-slate-200">
            <UserIcon className="w-5 h-5 text-slate-600" />
          </div>
          <button 
            onClick={onLogout}
            className="flex items-center gap-2 text-slate-600 hover:text-red-500 transition-colors font-medium text-sm"
          >
            <LogOut className="w-4 h-4" />
            <span className="hidden sm:inline">Logout</span>
          </button>
        </div>
      </header>

      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Column: Dashboard Stats & Recent Transactions */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          {/* Summary Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col">
              <div className="flex items-center gap-3 text-slate-500 mb-2">
                <div className="p-2 bg-blue-50 text-blue-600 rounded-lg"><Wallet className="w-5 h-5" /></div>
                <span className="font-medium">Total Balance</span>
              </div>
              <h2 className="text-3xl font-bold text-slate-900 my-2">{totalBalance}</h2>
            </motion.div>

            <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{delay:0.1}} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col">
              <div className="flex items-center gap-3 text-slate-500 mb-2">
                <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg"><TrendingUp className="w-5 h-5" /></div>
                <span className="font-medium">Total Income</span>
              </div>
              <h2 className="text-3xl font-bold text-slate-900 my-2">{totalIncome}</h2>
              <span className="text-sm text-emerald-600 font-medium">This month</span>
            </motion.div>

            <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{delay:0.2}} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col">
              <div className="flex items-center gap-3 text-slate-500 mb-2">
                <div className="p-2 bg-rose-50 text-rose-600 rounded-lg"><TrendingDown className="w-5 h-5" /></div>
                <span className="font-medium">Total Expenses</span>
              </div>
              <h2 className="text-3xl font-bold text-slate-900 my-2">{totalExpenses}</h2>
              <span className="text-sm text-rose-600 font-medium">This month</span>
            </motion.div>
          </div>

          {/* Recent Transactions Skeleton/List */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 flex-1">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-slate-800">Recent Transactions</h3>
              <button className="text-blue-600 text-sm font-medium hover:underline">View All</button>
            </div>
            <div className="divide-y divide-slate-100">
              {[
                { title: 'MTN MoMo - Send Money', category: 'Transfer', date: 'Today, 14:30', amount: '-5,000 RWF', isExpense: true },
                { title: 'Client Payment', category: 'Income', date: 'Today, 09:15', amount: '+25,000 RWF', isExpense: false },
                { title: 'Airtel Money - Airtime', category: 'Utility', date: 'Yesterday', amount: '-1,000 RWF', isExpense: true },
              ].map((tx, idx) => (
                <div key={idx} className="py-4 flex items-center justify-between hover:bg-slate-50 transition p-2 -mx-2 rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${tx.isExpense ? 'bg-rose-50 text-rose-600' : 'bg-emerald-50 text-emerald-600'}`}>
                      {tx.isExpense ? <TrendingDown className="w-5 h-5" /> : <TrendingUp className="w-5 h-5" />}
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 text-sm sm:text-base">{tx.title}</h4>
                      <p className="text-xs text-slate-500">{tx.category} • {tx.date}</p>
                    </div>
                  </div>
                  <span className={`font-bold ${tx.isExpense ? 'text-slate-800' : 'text-emerald-600'}`}>
                    {tx.amount}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Chat Interface & Coach */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 flex flex-col h-[600px] lg:h-auto overflow-hidden">
          <div className="bg-blue-600 p-4 text-white flex justify-between items-center">
            <div>
              <h3 className="font-bold">Gemini Financial Coach</h3>
              <p className="text-blue-100 text-xs">Always online • Ready to help</p>
            </div>
            {/* Real-time Voice Toggle */}
            <button 
              onClick={toggleRecording}
              className={`relative p-2 rounded-full transition-all ${isRecording ? 'bg-rose-500 animate-pulse outline outline-4 outline-rose-500/30' : 'bg-white/20 hover:bg-white/30'}`}
              title={isRecording ? "Stop Live Session" : "Start Live Session"}
            >
              <Mic className={`w-5 h-5 ${isRecording ? 'text-white' : 'text-white'}`} />
              {isRecording && <span className="absolute top-0 right-0 w-2 h-2 bg-white rounded-full animate-ping"></span>}
            </button>
          </div>

          <div className="flex-1 p-4 overflow-y-auto bg-slate-50 flex flex-col gap-4">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex max-w-[85%] ${msg.sender === 'user' ? 'self-end' : 'self-start'}`}>
                <div className={`p-3 rounded-2xl shadow-sm ${msg.sender === 'user' ? 'bg-blue-600 text-white rounded-tr-sm' : 'bg-white border border-slate-200 text-slate-800 rounded-tl-sm'}`}>
                  <p className="text-sm leading-relaxed">{msg.text}</p>
                  <span className={`text-[10px] block mt-1 ${msg.sender === 'user' ? 'text-blue-200 text-right' : 'text-slate-400'}`}>
                    {msg.timestamp}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={handleSendMessage} className="p-3 bg-white border-t border-slate-100 flex gap-2">
            <input 
              type="text" 
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Paste MoMo SMS or ask for advice..."
              className="flex-1 bg-slate-50 border border-slate-200 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
            <button 
              type="submit"
              disabled={!inputText.trim()}
              className="w-10 h-10 rounded-full flex items-center justify-center bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:hover:bg-blue-600 transition shadow-sm"
            >
              <Send className="w-4 h-4 ml-0.5" />
            </button>
          </form>
        </div>

      </main>
    </div>
  );
}
