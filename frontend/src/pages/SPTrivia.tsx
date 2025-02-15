import React, { useState } from 'react';
import './SPTrivia.css'; 

const SPTrivia: React.FC = () => {
  const questions = [
    { question: "What's the capital of France?", options: ["Paris", "London", "Berlin"], answer: "Paris" },
    { question: "Who wrote '1984'?", options: ["George Orwell", "Aldous Huxley", "J.K. Rowling"], answer: "George Orwell" },
    // Add more questions here
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);

  const handleAnswer = (answer: string) => {
    if (answer === questions[currentQuestionIndex].answer) {
      setScore(score + 1);
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsGameOver(true);
    }
  };

  const restartGame = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setIsGameOver(false);
  };

  return (
    <div className="trivia-game">
      {isGameOver ? (
        <div className="game-over">
          <p>Your score: {score}</p>
          <button onClick={restartGame}>Restart</button> {/* Reset the game instead of reloading */}
        </div>
      ) : (
        <div className="question-container">
          <p>{questions[currentQuestionIndex].question}</p>
          <div className="options">
            {questions[currentQuestionIndex].options.map((option, index) => (
              <button key={index} onClick={() => handleAnswer(option)}>
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SPTrivia;
