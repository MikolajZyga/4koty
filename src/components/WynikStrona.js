import React from 'react';
import { useLocation } from 'react-router-dom';
import './WynikStrona.css';

function WynikStrona() {
  const location = useLocation();

  // Retrieve the percentages from the navigation state
  const ageGroupMatchingPercentage = location.state?.ageGroupMatchingPercentage || 0;
  const finalMatchingPercentage = location.state?.finalMatchingPercentage || 0;

  // Determine a result message based on the final matching percentage
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
        {/* Display the age group matching percentage as the main percentage */}
        <h2 className="percentage-display">{ageGroupMatchingPercentage.toFixed(2)}%</h2>
        <p className="description">Procent osób spełniających Twoje kryteria w wybranej grupie wiekowej.</p>
        
        {/* Display the final matching percentage below */}
        <h3 className="secondary-percentage-display">Procent osób spełniających Twoje kryteria w całej populacji: {finalMatchingPercentage.toFixed(2)}%</h3>
        
        <p className="result-message">{getResultMessage(finalMatchingPercentage)}</p>
      </div>
    </div>
  );
}

export default WynikStrona;