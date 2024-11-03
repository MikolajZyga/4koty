import React, { useState } from 'react';
import ReactSlider from 'react-slider';
import './KalkulatorStandardow.css';

function KalkulatorStandardow() {
  // State for options and sliders
  const [gender, setGender] = useState('Mężczyźni');
  const [excludeObese, setExcludeObese] = useState('Nie');
  const [excludeMarried, setExcludeMarried] = useState('Nie');
  const [ageRange, setAgeRange] = useState([18, 100]);
  const [heightRange, setHeightRange] = useState([150, 220]);
  const [incomeRange, setIncomeRange] = useState([0, 100000]);

  return (
    <div className="container-standardow">
      <h1 className="title">Kalkulator Standardów</h1>
      <p className="subtitle">
        Czy Twój idealny partner jest realny, czy to tylko fantazja? Sprawdź to za pomocą naszego kalkulatora.
      </p>
      <div className="calculator-box">
        <h2>Jaki procent osób w Polsce spełnia Twoje standardy?</h2>
        <form>
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
            className="range-slider"
            thumbClassName="thumb"
            trackClassName="track"
            value={ageRange}
            onChange={(value) => setAgeRange(value)}
            min={18}
            max={100}
            minDistance={1}
            pearling
            withTracks
          />

          {/* Height Range Slider */}
          <label>Wzrost: {heightRange[0]} - {heightRange[1]} cm</label>
          <ReactSlider
            className="range-slider"
            thumbClassName="thumb"
            trackClassName="track"
            value={heightRange}
            onChange={(value) => setHeightRange(value)}
            min={150}
            max={220}
            minDistance={1}
            pearling
            withTracks
          />

          {/* Income Range Slider */}
          <label>Miesięczne zarobki: {incomeRange[0]} zł - {incomeRange[1]} zł</label>
          <ReactSlider
            className="range-slider"
            thumbClassName="thumb"
            trackClassName="track"
            value={incomeRange}
            onChange={(value) => setIncomeRange(value)}
            min={0}
            max={100000}
            step={500}
            minDistance={500}
            pearling
            withTracks
          />

          {/* Submit Button */}
          <button type="submit" className="submit-btn">
            Sprawdź Wynik
          </button>
        </form>
      </div>
      <p className="footer-text">Obliczenia na podstawie danych z polskich statystyk.</p>
    </div>
  );
}

export default KalkulatorStandardow;