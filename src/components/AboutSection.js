import React from 'react';
import './FAQSection.css'; // Reuse FAQ styles if appropriate

function AboutSection() {
  return (
    <div className="about-container">
      <h2 className="about-title">O Delululatorze</h2>
      <p className="about-description">
        Wielu osobom (nie tylko Tobie) znalezienie wartościowego partnera kojarzy się z mękami i udręką.
        Kobiet i mężczyzn w Polsce jest tyle samo, więc w teorii każdemu powinno się udać znaleźć bratnią duszę.
        Dlaczego tak się nie dzieje i co dzień zadajesz sobie pytanie:
      </p>
      <blockquote className="about-description">
       

        <blockquote className="about-quote"><em>"Dlaczego nie mogę znaleźć normalnego typa?</em>”</blockquote>
      </blockquote>
      <p className="about-description">
        Relacje damsko-męskie mają swoje zawiłości, na które odpowiedzi nie znamy. Jednak z wrodzonej ciekawości
        pasji do nauki zaczęliśmy zadawać pytania. W efekcie badań prezentujemy Ci narzędzie, które spróbuje Ci odpowiedzieć,
        gdzie się podziali wszyscy fajni kolesie.
      </p>
      <p className="about-description">
        Bazując na aktualnych danych statystycznych, ten kalkulator pozwala oszacować, ilu facetów spełniających Twoje
        wymagania czeka gdzieś na Ciebie. Po rozmowie z koleżankami dowiedzieliśmy się, że porządnych gości jest jak
        na lekarstwo, a może to nasze koleżanki nie wiedzą, jak znaleźć normalnego chłopaka?
      </p>
    </div>
  );
}

export default AboutSection;