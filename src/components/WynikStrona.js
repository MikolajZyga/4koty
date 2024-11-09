import React from 'react';
import { useLocation } from 'react-router-dom';
import './WynikStrona.css';
import image0 from '../assets/images/0.jpeg';
import image1 from '../assets/images/1.jpeg';
import image2 from '../assets/images/2.jpeg';
import image3 from '../assets/images/3.jpeg';
import image4 from '../assets/images/4.jpeg';

function WynikStrona() {
  const location = useLocation();
  const { finalMatchingPercentage, ageGroupMatchingPercentage, exactPopulationCount } = location.state || {};

  // Placeholder image URLs based on percentage range
  const getImageForPercentage = (percentage) => {
    if (percentage > 80) return image0;
    if (percentage > 60) return image1;
    if (percentage > 40) return image2;
    if (percentage > 20) return image3;
    return image4;
  };

  // Placeholder descriptions based on percentage range
  const getDescriptionForPercentage = (percentage) => {
    if (percentage > 80) return 'Great match! High chance of finding someone who meets your criteria.';
    if (percentage > 60) return 'Good match! You have a solid chance of finding a suitable person.';
    if (percentage > 40) return 'Moderate match. Some potential matches might meet your criteria.';
    if (percentage > 20) return 'Low match. It may be challenging to find a suitable person.';
    return 'Very low match. Finding someone meeting your criteria may be rare.';
  };

  return (
    <div className="container-wynik">
      <h1 className="title">Wynik Kalkulacji</h1>

      {/* Display Image Based on Final Matching Percentage */}
      <div className="image-container">
      <img src={getImageForPercentage(ageGroupMatchingPercentage)} alt="Match result illustration" className="result-image" />
    </div>

      {/* Age Group Matching Percentage */}
      <div className="result-box">
        <h2 className="percentage-display">{ageGroupMatchingPercentage?.toFixed(2)}%</h2>
        <p className="description">Procent mężczyzn spełniających kryteria w wybranej grupie wiekowej.</p>

        {/* Exact Population Count */}
        <p className="exact-population">To odpowiada około {exactPopulationCount?.toLocaleString()} osobom.</p>
      </div>
      {/* Dynamic Text Description Based on Percentage */}
      <p className="result-message">{getDescriptionForPercentage(ageGroupMatchingPercentage)}</p>

      {/* Final Matching Percentage */}
      <div className="final-percentage-box">
        <h3 className="final-percentage">{finalMatchingPercentage?.toFixed(2)}%</h3>
        <p className="final-description">Procent mężczyzn spełniających kryteria w całej populacji mężczyzn.</p>
      </div>
    </div>
  );
}

export default WynikStrona;