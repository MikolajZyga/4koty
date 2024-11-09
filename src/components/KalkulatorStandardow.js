import React, { useState } from 'react';
import ReactSlider from 'react-slider';
import './KalkulatorStandardow.css';
import { useNavigate } from 'react-router-dom';
import { calculateOutcome } from '../utils/calculateOutcome';
import maleData from '../data/malePopulationData.json';
import femaleData from '../data/femalePopulationData.json';


function KalkulatorStandardow() {
  // State for options and sliders
  const [gender, setGender] = useState('Mężczyźni');
  const [excludeObese, setExcludeObese] = useState('Nie');
  const [excludeMarried, setExcludeMarried] = useState('Nie');
  const [ageRange, setAgeRange] = useState([18, 70]);
  const [minHeight, setMinHeight] = useState(150); // Single value for minimum height
  const [minIncome, setMinIncome] = useState(0); // Single value for minimum income

  const navigate = useNavigate(); // Hook for navigation

  const handleCalculation = () => {
    const isNonObese = excludeObese === 'Tak';
    const maritalStatus = excludeMarried === 'Tak' ? 'single' : 'married';

    const result = calculateOutcome({
        gender: gender === 'Mężczyźni' ? 'male' : 'female',
        excludeObese: isNonObese,
        excludeMarried: maritalStatus === 'single',
        ageRange,
        minHeight,
        minIncome
    });

    navigate('/wynik', { state: { finalMatchingPercentage: result.finalMatchingPercentage, ageGroupMatchingPercentage: result.ageGroupMatchingPercentage } });
};

  return (
    <div className="container-standardow">
      <h1 className="title">Kalkulator Standardów</h1>
      <p className="subtitle">
        Czy Twój idealny partner jest realny, czy to tylko fantazja? Sprawdź to za pomocą naszego kalkulatora.
      </p>
      <div className="calculator-box">
        <h2>Jaki procent osób w Polsce spełnia Twoje standardy?</h2>
        <form onSubmit={(e) => { e.preventDefault(); handleCalculation(); }}>
          {/* Gender Selection */}
          <div className="option-row">
            <label className="option-label">Płeć</label>
            <div className="option-group">
              <button
                type="button"
                className={`option-btn ${gender === 'Mężczyźni' ? 'selected' : ''}`}
                onClick={() => setGender('Mężczyźni')}
              >
                Mężczyźni
              </button>
              <button
                type="button"
                className={`option-btn ${gender === 'Kobiety' ? 'selected' : ''}`}
                onClick={() => setGender('Kobiety')}
              >
                Kobiety
              </button>
            </div>
          </div>

          {/* Exclude Obese */}
          <div className="option-row">
            <label className="option-label">Wyklucz osoby otyłe</label>
            <div className="option-group">
              <button
                type="button"
                className={`option-btn ${excludeObese === 'Tak' ? 'selected' : ''}`}
                onClick={() => setExcludeObese('Tak')}
              >
                Tak
              </button>
              <button
                type="button"
                className={`option-btn ${excludeObese === 'Nie' ? 'selected' : ''}`}
                onClick={() => setExcludeObese('Nie')}
              >
                Nie
              </button>
            </div>
          </div>

          {/* Exclude Married */}
          <div className="option-row">
            <label className="option-label">Wyklucz osoby zamężne/żonate</label>
            <div className="option-group">
              <button
                type="button"
                className={`option-btn ${excludeMarried === 'Tak' ? 'selected' : ''}`}
                onClick={() => setExcludeMarried('Tak')}
              >
                Tak
              </button>
              <button
                type="button"
                className={`option-btn ${excludeMarried === 'Nie' ? 'selected' : ''}`}
                onClick={() => setExcludeMarried('Nie')}
              >
                Nie
              </button>
            </div>
          </div>

          {/* Age Range Slider */}
          <label>Wiek: {ageRange[0]} - {ageRange[1]} lat</label>
          <ReactSlider
            className="range-slider age-slider"
            thumbClassName="thumb"
            trackClassName="track-age"
            value={ageRange}
            onChange={(value) => setAgeRange(value)}
            min={18}
            max={70}
            minDistance={1}
            pearling
            withTracks={true}
          />

          {/* Height Minimum Slider */}
          <label>Minimalny wzrost: {minHeight} cm</label>
          <ReactSlider
            className="range-slider min-slider"
            thumbClassName="thumb"
            trackClassName="track-min"
            value={minHeight}
            onChange={(value) => setMinHeight(value)}
            min={150}
            max={205}
            withTracks={true}
          />

          {/* Income Minimum Slider */}
          <label>Minimalne miesięczne zarobki: {minIncome} zł</label>
          <ReactSlider
            className="range-slider min-slider"
            thumbClassName="thumb"
            trackClassName="track-min"
            value={minIncome}
            onChange={(value) => setMinIncome(value)}
            min={0}
            max={50000}
            step={500}
            withTracks={true}
          />

          {/* Submit Button */}
          <button type="submit" className="submit-btn">
            Sprawdź Wynik
          </button>
        </form>
      </div>
      <p className="footer-text">Obliczenia na podstawie danych z GUS i Eurostat.</p>
    </div>
  );
}

export default KalkulatorStandardow;



// POZDRO KUBA!!! 