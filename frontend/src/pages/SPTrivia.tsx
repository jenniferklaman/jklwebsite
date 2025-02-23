import React, { useState } from 'react';
import './SPTrivia.css';
import { questionsData, Question } from './pages_assets/questions'; // Importing questions

const SPTrivia: React.FC = () => {
  const [gameStage, setGameStage] = useState<'welcome' | 'category' | 'difficulty' | 'game' | 'gameOver'>('welcome');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [category, setCategory] = useState<string | null>(null);
  const [difficulty, setDifficulty] = useState<'easy' | 'medium' | 'hard'>('easy');
  const [questions, setQuestions] = useState<Question[]>([]); // Explicitly typing the questions state as an array of Question objects

  const handleCategorySelection = (selectedCategory: string) => {
    setCategory(selectedCategory);
    setGameStage('difficulty'); // After selecting category, go to difficulty selection
  };

  const handleDifficulty = (level: 'easy' | 'medium' | 'hard') => {
    if (category) {
      setDifficulty(level);
      setQuestions(questionsData[category][level]); // Fetch questions based on selected category and difficulty
      setCurrentQuestionIndex(0); // Reset question index
      setGameStage('game'); // Start the game
    }
  };

  const handleAnswer = (answer: string) => {
    if (answer === questions[currentQuestionIndex].answer) {
      setScore(score + 1);
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setGameStage('gameOver');
    }
  };

  const restartGame = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setGameStage('category'); // Go back to category selection
  };

  const goBack = () => {
    window.history.back();  // Takes the user back to the previous page
  };

  const mainMenu = () => {
    setGameStage('welcome');
    setCategory(null); // Reset category
    setDifficulty('easy'); // Reset difficulty
    setScore(0); // Reset the score
    setCurrentQuestionIndex(0); // Reset the question index
  };

  return (
    <div className="trivia-container">
    <div className="trivia-game">
      {gameStage === 'welcome' && (
        <div className="welcome-screen">
          <div className="gif-container"></div> {/* Adding gif-container */}
          <div className="menu-container">
            <h1>Welcome to Shower Party Trivia!</h1>
            <button onClick={() => setGameStage('category')}>Start Game</button>
            <button onClick={goBack}>Exit</button>
          </div>
        </div>
      )}

      {gameStage === 'category' && (
        <div className="category-selection">
          <h2>Select Category</h2>
          <button onClick={() => handleCategorySelection('GeneralKnowledge')}>General Knowledge</button>
          <button onClick={() => handleCategorySelection('History')}>History</button>
          <button onClick={() => handleCategorySelection('Science')}>Science</button>
          <button onClick={() => handleCategorySelection('Math')}>Math</button>
          <button onClick={() => handleCategorySelection('Literature')}>Literature</button>
          <button onClick={() => handleCategorySelection('Geography')}>Geography</button>
          <button onClick={() => handleCategorySelection('RandomXD')}>RandomXD</button>
        </div>
      )}

      {gameStage === 'difficulty' && (
        <div className="difficulty-selection">
          <h2>Select Difficulty</h2>
          <button onClick={() => handleDifficulty('easy')}>Easy</button>
          <button onClick={() => handleDifficulty('medium')}>Medium</button>
          <button onClick={() => handleDifficulty('hard')}>Hard</button>
        </div>
      )}

      {gameStage === 'game' && (
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

      {gameStage === 'gameOver' && (
        <div className="game-over">
          <p>Your score: {score}</p>
          <button onClick={mainMenu}>Main Menu</button>
          <button onClick={restartGame}>Restart</button>
          <button onClick={goBack}>Exit</button>
        </div>
      )}
      </div>
    </div>
  );
};

export default SPTrivia;
