import React from 'react';
import { useLocation, useNavigate  } from 'react-router-dom';
import './WynikStrona.css';
import image0 from '../assets/images/0.jpeg';
import image1 from '../assets/images/1.jpeg';
import image2 from '../assets/images/2.jpeg';
import image3 from '../assets/images/3.jpeg';
import image4 from '../assets/images/4.jpeg';

function WynikStrona() {
  const location = useLocation();
  const navigate = useNavigate();
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
    if (percentage > 80) return '✨ Naprawdę nie prosisz o wiele! Każda szanująca się kobieta musi oczekiwać od partnera zdrowego minimum. 😌 Skoro Twój wybranek czeka za rogiem, życzymy powodzenia! 🎉 Nie zapomnij o darowiźnie dla lokalnego schroniska 🐾, bo Twój przyszły niedoszły koci towarzysz prędko się z Tobą nie spotka! 😹';

    if (percentage > 60) return '🔮 Na dwoje babka wróżyła! Chłopcy w Twoim typie istnieją, ale nie leżą w każdym mięsnym. 😅 Jak swojego amanta nie znajdziesz, zawsze możesz na randkę iść z kotem 🐱. Jeśli planujesz szukać partnera na poważnie, nie poddawaj się, ale darowizna na schronisko też nie zaszkodzi. Może Twój chłopak tam mieszka! 🏠😹';
    
    if (percentage > 40) return '😬 Ciężki przypadek, laleczko! Typów w Twoim typie jest mniej niż się wydaje 🥲 i zdecydowanie mniej niż kocurów w okolicy. Możesz liczyć na uwagę kociego przyjaciela, ale czy o takie życie Ci chodzi? 🍷 Propozycja randki? Butelka wina i puszka mokrej karmy! 😽 Darowiznę wpłacisz o tutaj 🐾.';
    
    if (percentage > 20) return '😿 Miaaau! Nie jest dobrze. Typów na horyzoncie brak. Koty w Twoim towarzystwie już nawet nie interesują się saszetą 🐟, skazane na Ciebie, patrzą smutno na butelkę wina 🍷 – produkt pierwszej potrzeby. Chlip. Przemyśl życiowe decyzje, a może odwiedź lokalne schronisko 🐈 w międzyczasie.';
    
    return '🤯 Typiaro, jesteś delulu! Kalkulator się nie myli, Twój wymarzony to jednorożec 🦄. Nawet Twoje koty przestały się z Ciebie śmiać 🙀. Spróbuj zmienić podejście do poszukiwań partnera 🥲, bo inaczej resztę życia spędzisz biegając po saszetę. W międzyczasie odwiedź schronisko i wspomóż je darowizną. 🙏🐾';
  };

  return (
    <div className="container-wynik">
      <h1 className="title">💫 Delulu? 💫</h1>

      {/* Display Image Based on Final Matching Percentage */}
      <div className="image-container">
      <img src={getImageForPercentage(ageGroupMatchingPercentage)} alt="Match result illustration" className="result-image" />
    </div>

      {/* Age Group Matching Percentage */}
      <div className="result-box">
      <p className="description">🎯 Oto wynik w wybranej grupie wiekowej. 🎯</p>
        <h2 className="percentage-display">{ageGroupMatchingPercentage?.toFixed(2)}%</h2>

        {/* Exact Population Count */}
        <p className="exact-population">🔍 Około {exactPopulationCount?.toLocaleString()} mężczyzn jest w Twoim typie. 🔍</p>
        <p className="description">Czyli {finalMatchingPercentage?.toFixed(2)}% wszystkich Polaków</p>
      </div>
      {/* Dynamic Text Description Based on Percentage */}
      <p className="result-message">{getDescriptionForPercentage(ageGroupMatchingPercentage)} </p>
      <p className="result-message">
    🐾 Znajdź lokalne schronisko - 
    <a href="https://otoz.pl/wykaz-schronisk-w-polsce/" target="_blank" rel="noopener noreferrer"> TUTAJ </a>🐾
    </p>

      <button className="global-button" onClick={() => navigate('/')}>🔄 Policz jeszcze raz</button>

    </div>
  );
}

export default WynikStrona;