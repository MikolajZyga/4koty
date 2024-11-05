import React from 'react';
import { useLocation } from 'react-router-dom';
import './WynikStrona.css';

function WynikStrona() {
  const location = useLocation();
  const percentage = location.state?.percentage || 0; // Default to 0 if not provided

  // Determine a result message based on the percentage
  const getResultMessage = (percentage) => {
    if (percentage > 50) {
      return 'Masz duże szanse na znalezienie osoby spełniającej Twoje kryteria!';
    } else if (percentage > 20) {
      return 'Masz umiarkowane szanse na znalezienie osoby spełniającej Twoje kryteria.';
    } else if (percentage > 0) {
      return 'Twoje kryteria są dość wymagające, szanse są niskie.';
    } else {
      return 'Brak wyników spełniających podane kryteria.';
    }
  };

  return (
    <div className="container-wynik">
      <h1 className="title">Wynik Kalkulacji</h1>
      <div className="result-box">
        <h2 className="percentage-display">{percentage.toFixed(2)}%</h2>
        <p className="description">Procent osób spełniających Twoje kryteria.</p>
        <p className="result-message">{getResultMessage(percentage)}</p>
      </div>
    </div>
  );
}

export default WynikStrona;