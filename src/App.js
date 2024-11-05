import React from 'react';
import { Analytics } from '@vercel/analytics';
import KalkulatorStandardow from './components/KalkulatorStandardow';

function App() {
  return (
    <div className="App">
      <KalkulatorStandardow />
      <Analytics />
    </div>
  );
}

export default App;
