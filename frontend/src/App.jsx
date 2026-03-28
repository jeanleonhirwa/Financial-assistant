import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import AppDashboard from './components/AppDashboard';

function App() {
  const [currentView, setCurrentView] = useState('landing'); // 'landing' or 'app'

  return (
    <>
      {currentView === 'landing' ? (
        <LandingPage onEnterApp={() => setCurrentView('app')} />
      ) : (
        <AppDashboard onLogout={() => setCurrentView('landing')} />
      )}
    </>
  );
}

export default App;
