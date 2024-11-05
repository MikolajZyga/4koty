import React, { useEffect } from 'react';
import { inject } from '@vercel/analytics';
import KalkulatorStandardow from './components/KalkulatorStandardow';

function App() {
  useEffect(() => {
    inject();
  }, []);

  return (
    <div className="App">
      <KalkulatorStandardow />
    </div>
  );
}

export default App;
