import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { inject } from '@vercel/analytics';
import KalkulatorStandardow from './components/KalkulatorStandardow';
import WynikStrona from './components/WynikStrona'; // Import the new results page component

function App() {
  useEffect(() => {
    inject();
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<KalkulatorStandardow />} />
          <Route path="/wynik" element={<WynikStrona />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;