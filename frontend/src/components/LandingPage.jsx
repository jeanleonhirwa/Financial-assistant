import React from 'react';
import { ArrowRight, Receipt, Activity, CheckCircle, Smartphone } from 'lucide-react';
import { motion } from 'framer-motion';

export default function LandingPage({ onEnterApp }) {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 grid grid-rows-[auto_1fr_auto]">
      {/* Header */}
      <header className="px-6 py-4 flex items-center justify-between border-b border-slate-200 bg-white">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">FA</div>
          <span className="text-xl font-bold tracking-tight text-slate-800">Financial Assistant</span>
        </div>
        <button 
          onClick={onEnterApp}
          className="px-4 py-2 text-sm font-semibold text-blue-600 bg-blue-50 rounded-full hover:bg-blue-100 transition-colors"
        >
          Sign In
        </button>
      </header>

      {/* Hero Section */}
      <main className="flex flex-col items-center">
        <section className="w-full max-w-5xl px-6 py-20 text-center flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight max-w-4xl">
              Turn your hustle's cash flow into <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">bank-ready receipts.</span>
            </h1>
            <p className="mt-6 text-xl text-slate-600 max-w-2xl mx-auto">
              The 24/7 financial coach for MSMEs in Rwanda. Digitize operations, track MoMo transactions, and build verifiable credit history effortlessly.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                onClick={onEnterApp}
                className="px-8 py-4 w-full sm:w-auto text-lg font-bold text-white bg-blue-600 rounded-full hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-200 transition-all flex items-center justify-center gap-2"
              >
                Start Tracking for Free <ArrowRight className="w-5 h-5" />
              </button>
              <button 
                onClick={onEnterApp}
                className="px-8 py-4 w-full sm:w-auto text-lg font-bold text-slate-700 bg-white border border-slate-200 rounded-full hover:bg-slate-50 transition-colors"
              >
                View Dashboard
              </button>
            </div>
          </motion.div>
        </section>

        {/* How It Works Section */}
        <section className="w-full bg-white py-24 border-t border-slate-100">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900">How It Works</h2>
              <p className="mt-4 text-slate-600 text-lg">Four simple steps to financial clarity.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { icon: Smartphone, title: '1. Input MoMo Data', desc: 'Paste SMS or send voice notes of your transactions.' },
                { icon: Receipt, title: '2. AI Categorizes', desc: 'Our Gemini AI instantly structures your income and expenses.' },
                { icon: Activity, title: '3. Get Insights', desc: 'Receive real-time financial coaching and spending analysis.' },
                { icon: CheckCircle, title: '4. Build Credit', desc: 'Turn your digitized logs into a verifiable credit history.' }
              ].map((step, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="flex flex-col items-center text-center p-6 rounded-2xl bg-slate-50 border border-slate-100"
                >
                  <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                    <step.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{step.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-8 text-center text-slate-500 text-sm border-t border-slate-200 bg-white">
        © {new Date().getFullYear()} Financial Assistant. Built for MSMEs in Rwanda.
      </footer>
    </div>
  );
}
