import React from "react";
import { useGameContext } from "../context";
import Resultcard from "./resultcard";
import { Underline } from "./underline";

export const ResultModal = () => {
  const { questions, score, answers, userAnswers, handleShow, handleReload } = useGameContext();
  return (
    <div className="result-modal__overlay">
      <div className="result-modal__wrapper">
        <h2 className="result-modal__heading">Quiz Over</h2>
        <p className="result-modal__score">{`You scored ${score} out of ${questions.length}`}</p>
          {questions.map((que, i) => (
            <Resultcard
              key={que.question + i}
              que={que.question}
              answer={answers[i]}
              userAnswer={userAnswers[i]}
            />
          ))}
          <Underline />
          <div className="result-modal__btn-container"><button className="result-modal__btn" onClick={handleShow}>Close</button>
          <button className="result-modal__btn" onClick={handleReload}>New Game</button></div>
      </div>
    </div>
  );
};
