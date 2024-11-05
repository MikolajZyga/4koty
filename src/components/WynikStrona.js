import React from 'react';
import { useLocation } from 'react-router-dom';
import './WynikStrona.css';

function WynikStrona() {
  const location = useLocation();
  const percentage = location.state?.percentage || 0; // Default to 0 if not provided

  return (
    <div className="container-wynik">
      <h1 className="title">Wynik Kalkulacji</h1>
      <div className="result-box">
        <h2 className="percentage-display">{percentage}%</h2>
        <p className="description">Procent osób spełniających Twoje kryteria.</p>
      </div>
    </div>
  );
}

export default WynikStrona;