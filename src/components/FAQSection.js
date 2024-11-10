import React, { useState } from 'react';
import './FAQSection.css';

function FAQSection() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleAnswer = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Jak działa Delululator?",
      answer: "Delululator analizuje Twoje kryteria, takie jak wiek, wzrost, status majątkowy i inne preferencje, aby oszacować, ilu potencjalnych partnerów może spełniać Twoje oczekiwania. Bazując na danych statystycznych, podaje wynik w postaci procentowej szansy na znalezienie chłopaka odpowiadającego Twoim kryteriom.",
    },
    {
      question: "Jaki jest cel Delululatora?",
      answer: "Celem Delululatora jest pomoc osobom w ocenie ich kryteriów względem potencjalnych partnerów. Narzędzie pozwala realistycznie spojrzeć na to, jakie są szanse na znalezienie chłopaka o konkretnych cechach, i daje okazję do przemyślenia własnych oczekiwań.",
    },
    {
      question: "Skąd są pobierane dane do Delululatora?",
      answer: "Delululator korzysta z wiarygodnych danych statystycznych, takich jak informacje z Głównego Urzędu Statystycznego oraz Eurostatu. Dane te pomagają w określeniu realnych proporcji różnych cech demograficznych i społecznych wśród polskiej populacji.",
    },
    {
        question: "Jak przestać być singlem?",
        answer: "Aby przestać być singlem, warto zacząć od otwarcia się na nowe znajomości i wyjścia ze swojej strefy komfortu. Delululator może pomóc w realistycznym spojrzeniu na to, jakie są Twoje oczekiwania względem partnera. Pamiętaj, że ważne jest również budowanie relacji opartej na wzajemnym zrozumieniu, kompromisie i szacunku. Dołącz do grup zainteresowań, spróbuj randek online, lub zaangażuj się w działania społeczne – to wszystko zwiększa szanse na spotkanie kogoś wyjątkowego!",
      },
    {
      question: "Dlaczego nie mam chłopaka, mimo że go chcę?",
      answer: "Brak partnera może być wynikiem wielu czynników, takich jak zbyt wysokie wymagania, ograniczone możliwości poznania nowych osób czy też brak czasu na budowanie relacji. Delululator pomoże Ci ocenić, jakie są szanse na znalezienie chłopaka o wybranych cechach, co może pomóc w zrozumieniu, jak realistyczne są Twoje oczekiwania.",
    },
    {
      question: "Czy znajdę chłopaka, jeśli nigdy nie byłam w związku?",
      answer: "Tak, wiele osób znajduje miłość w późniejszych latach życia. Delululator może pomóc w ocenieniu, jakie są Twoje szanse na znalezienie odpowiedniego partnera, uwzględniając Twoje preferencje i wybrane kryteria. Pamiętaj, że zawsze jest czas na miłość!",
    },
    {
      question: "Czy mam za duże wymagania względem partnera?",
      answer: "Zbyt wysokie wymagania mogą wpływać na Twoje szanse na znalezienie chłopaka. Delululator pozwala Ci zobaczyć, jak realistyczne są Twoje oczekiwania względem partnera, pomagając w ewentualnym dostosowaniu kryteriów, aby zwiększyć szanse na znalezienie kogoś odpowiedniego.",
    },
    {
      question: "Jak mogę przestać być singlem i znaleźć chłopaka?",
      answer: "Delululator może być pomocny w ocenie, jakiego typu partnerów szukasz i jakie masz szanse ich znaleźć. Poza tym ważne jest otwarcie się na nowe znajomości, zaangażowanie w aktywności społeczne i praca nad budowaniem relacji. Dzięki Delululatorowi możesz również przemyśleć swoje kryteria i dostosować oczekiwania.",
    },
    {
      question: "Kto stworzył Delululator?",
      answer: "Delululator został stworzony przez pasjonatów analizy danych i socjologii, którzy chcieli dostarczyć użytkownikom zabawnego i jednocześnie przydatnego narzędzia do analizy ich szans na znalezienie partnera. Naszym celem jest pomoc w realistycznym podejściu do poszukiwań miłości.",
    },
];

  return (
    <div className="faq-container">
      <h2 className="faq-title">Najczęściej Zadawane Pytania</h2>
      {faqs.map((faq, index) => (
        <div key={index} className="faq-item">
          <p
            className={`faq-question ${expandedIndex === index ? 'expanded' : ''}`}
            onClick={() => toggleAnswer(index)}
          >
            {faq.question}
          </p>
          <p className={`faq-answer ${expandedIndex === index ? 'show' : ''}`}>
            {faq.answer}
          </p>
        </div>
      ))}
    </div>
  );
}

export default FAQSection;