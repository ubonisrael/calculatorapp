import { createContext, useContext, useEffect, useState } from "react";

export const GameContext = createContext({});

export const useGameContext = () => useContext(GameContext);

export default function GameContextProvider({ children }) {
  const [questions, setQuestions] = useState([]); 
  const [answers, setAnswers] = useState([]); //answers to the quiz
  const [userAnswers, setUserAnswers] = useState([]); //users attempted answers
  const [index, setIndex] = useState(0); //question index
  const [score, setScore] = useState(0); //users score
  const [showResult, setShow] = useState(false); //show result modal?

  //function that handles the appearance of the result modal
  const handleShow = () => setShow(prev => !prev)

  //reloads the quiz game, sets a new quiz game
  const handleReload = () => location.reload()

  //handles the event of an answer click
  const handleAnswerClick = (e, ind) => {
    //create a copy of the usersAnswers
    const arr = [...userAnswers];
    //set the answer to the index of the question
    arr[ind] = e.target.innerHTML;
    //set the copy to usersAnswers
    setUserAnswers(arr);
  };

  const calculateResult = () => {
    let count = 0;
    for (let i = 0;i < answers.length; i++) {
      if (answers[i] === userAnswers[i]) {
          count++;
      }
    }
    //set score of the quiz
    setScore(count);
    //how the result
    handleShow()
  };

  const handleNext = () => {
    //get the next question if the last question hasn't been reached
    if (index < questions.length - 1) {
      setIndex((prev) => prev + 1);
      return;
    }
    //reaching here means last question has been reached, display result
    calculateResult();
  };

  useEffect(() => {
    const unsubscribe = async () => {
      const data = await fetch(
        "https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple"
      ).then((res) => res.json());
      const { results } = data;
      let ans = [];
      results.forEach((element) => {
        element.possibleAnswers = [
          ...element.incorrect_answers,
          element.correct_answer,
        ];
        ans.push(element.correct_answer);
      });
      setQuestions(results);
      setAnswers(ans);
    };

    unsubscribe();

    return () => unsubscribe;
  }, []);

  return (
    <GameContext.Provider
      value={{
        questions,
        answers,
        userAnswers,
        index,
        score,
        showResult,
        handleShow,
        handleAnswerClick,
        handleNext,
        handleReload,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}
