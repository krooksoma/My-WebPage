import React, { useState } from "react";

const questions = [
  {
    id: 1,
    question: "Why?",
    answer: "IDK",
  },
  {
    id: 2,
    question: "Where?",
    answer: "Somewhere",
  },
  {
    id: 3,
    question: "When?",
    answer: "Sometime",
  },
];

function FlashCards() {
  const [selectedId, setSelectedId] = useState(null);

  function handleClick(itemId) {
    setSelectedId(itemId !== selectedId ? itemId : null);
  }

  return (
    <div className="flashCards">
      {questions.map((item) => (
        <div
          key={questions.id}
          // it is necessary to pass to onClick as function to avoid infinite loop
          onCLick={() => handleClick(item.id)}
          className={item.id === item.id ? "selected" : ""}
        >
          <p>{item.id === selectedId ? item.answer : item.question}</p>
        </div>
      ))}
    </div>
  );
}

FlashCards.propTypes = {};

FlashCards.defaultProps = {};

export default FlashCards;
