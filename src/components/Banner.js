import React from 'react';
import './Banner.css'; // Styling for the banner

function Banner() {
  return (
    <a 
      href="https://apps.apple.com/pl/app/larrygpt/id6738836316" 
      target="_blank"
      rel="noopener noreferrer"
      className="banner-container"
    >
      <div className="banner-content">
        <img src={require('../assets/images/Larry-Logo-v2.png')} alt="Larry Logo" className="banner-logo" />
        <div className="banner-text">
          <h2>Skrzydłowy AI w Twoim telefonie</h2>
          <p>Sprawdź w App Store</p>
        </div>
      </div>
    </a>
  );
}

export default Banner;