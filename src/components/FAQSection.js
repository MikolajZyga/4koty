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
      question: "Skąd Delululator wie ilu jest chłopaków w Twoim typie?",
      answer: "Delululator korzysta z wiarygodnych danych statystycznych, takich jak informacje z Głównego Urzędu Statystycznego oraz Eurostatu. Dane te pomagają w określeniu realnych proporcji różnych cech demograficznych i społecznych wśród polskiej populacji.",
    },
    {
      question: "Jak przestać być singielką?",
      answer: "Aby przestać być samotną, warto zacząć od otwarcia się na nowe znajomości i wyjścia ze swojej strefy komfortu. Delululator może pomóc w realistycznym spojrzeniu na to, jakie są Twoje oczekiwania względem partnera. Pamiętaj, że ważne jest również budowanie relacji opartej na wzajemnym zrozumieniu, kompromisie i szacunku. Dołącz do grup zainteresowań, spróbuj randek online, lub zaangażuj się w działania społeczne – to wszystko zwiększa szanse na spotkanie kogoś wyjątkowego!",
    },
    {
      question: "Kolejny rok, a „lato mija, a Ty niczyja?",
      answer: "Brak partnera może być wynikiem wielu czynników, takich jak zbyt wysokie wymagania, ograniczone możliwości poznania nowych osób czy też brak czasu na budowanie relacji. Delululator pomoże Ci ocenić, jakie są szanse na znalezienie wymarzonego chłopaka o wybranych cechach, co może pomóc w zrozumieniu, jak realistyczne są Twoje oczekiwania.",
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
      question: "Jak mogę przestać być sama i znaleźć chłopaka?",
      answer: "Delululator może być pomocny w ocenie, jakiego typu partnerów szukasz i jakie masz szanse ich znaleźć. Poza tym ważne jest otwarcie się na nowe znajomości, zaangażowanie w aktywności społeczne i praca nad budowaniem relacji. Dzięki Delululatorowi możesz również przemyśleć swoje kryteria i dostosować oczekiwania.",
    },
    {
      question: "Kto stworzył Delululator?",
      answer: "Arkadia Studio - Twój nowy przyjaciel w Internecie. Jesteśmy studiem projektowym, które zaciągnęło naukę do pracy na rzecz społeczeństwa. Wydajemy takie oprogramowanie, które pozwala żyć lepiej. Nie dziękuj, wróć do nas jak tylko poczujesz, że czegoś Ci brak."
    },
    {
      question: "Jestem facetem i tu trafiłem.",
      answer: "Wiemy, że tu jesteś. Powodują Tobą różne motywacje. Jeżeli tylko sprawdzasz jak bardzo jesteś wyjątkowy, to pamiętaj, że wszyscy jesteśmy, ale uwzględnione czynniki to nie jedyne kryteria na które potencjalna partnerka zwróci uwagę. Sortujemy tylko takie dane, które statystycy zebrali w spisach ludności. Ty możesz zwiększać swoje szanse u płci przeciwnej pogłębiając pasje, poznając języki obce, trenując sport, czytając. Dopiero wychodząc ze strefy komfortu zaczynasz się rozwijać. Wszak 1 procent Polaków to nadal ponad 100 tysięcy chłopa. Jeżeli jednak przyszedłeś tu żeby udowadniać dziewczynom, że są delulu, to powściągnij swe rumaki kowboju. Popracuj najpierw nad sobą zanim zaczniesz naprawiać innych. Rynek matrymonialny zadziała jak każdy inny organizm i pewnie te panienki, które Cię zdenerwowały będą musiały zmienić swoje wymagania, co pozwoli im znaleźć swojego wybranka, a Twoje frustracje pozostaną z Tobą na dłużej. Delululator to narzędzie, które miało służyć zabawie a nie podnoszeniu Ci ciśnienia.",
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