"use client"

import React, { useState } from 'react'


const Game = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [isAnswered, setIsAnswered] = useState(false);

    let questions = [
        {
            question: "When did the famous US economy crash happen?",
            choice1: "2003",
            choice2: "2002",
            choice3: "2005",
            choice4: "2008",
            answer: 4,
        },
        {
            question: "What's the estimated market cap of Bitcoin?",
            choice1: "$400 million",
            choice2: "$250 trillion",
            choice3: "$50 billion",
            choice4: "$550 billion",
            answer: 4,
        },
        {
            question: "How is the stock of Tesla called?",
            choice1: "$TESLA",
            choice2: "$TSLA",
            choice3: "$TSL",
            choice4: "$TSLAA",
            answer: 2,
        },
        {
            question: "How is the stock of Nvidia called?",
            choice1: "$NVDA",
            choice2: "$NVIDA",
            choice3: "$NVDAD",
            choice4: "$NVIDIA",
            answer: 1,
        },
        {
            question: "How is the stock of Amazon called?",
            choice1: "$AMAZ",
            choice2: "$AMZN",
            choice3: "$AMAZN",
            choice4: "$AMZ",
            answer: 2,
        },
        {
            question: "How is the stock of Apple called?",
            choice1: "$APLE",
            choice2: "$APPLE",
            choice3: "$APPL",
            choice4: "$AAPL",
            answer: 4,
        },
    ];
  
    const handleAnswerClick = (selectedAnswer) => {
      // Check if the selected answer is correct
      const isCorrectAnswer = selectedAnswer === questions[currentQuestion].answer;
    
      // Update the state to indicate the selected answer and whether it is correct
      setScore(isCorrectAnswer ? score + 1 : score);
      setSelectedAnswer(selectedAnswer);
      setIsAnswered(true);
    
      // Delay for 1 second before moving to the next question
      setTimeout(() => {
        // Move to the next question
        setCurrentQuestion(currentQuestion + 1);
    
        // Reset the state for the next question
        setSelectedAnswer(null);
        setIsAnswered(false);
      }, 200);
    };
    
    if (currentQuestion >= questions.length) {
      // Quiz is completed, display the final score
      return <div className='text-4xl'>Your score: {score} / {questions.length}</div>;
    }
    
    const question = questions[currentQuestion];
  
    return (
      <div className="flex flex-col justify-center items-center">
        <h2 className="sticky top-0 mb-12 text-2xl">{question.question}</h2>
        <div className="grid grid-cols-2 gap-7">
          <button
            className="bg-white rounded-2xl w-[172px] h-[66px] text-xl text-slate-950 font-mono text-black hover:bg-slate-100 duration-150"
            onClick={() => handleAnswerClick(1)}
          >
            {question.choice1}
          </button>
          <button
            className="bg-white rounded-2xl w-[172px] h-[66px] text-xl text-slate-950 font-mono text-black hover:bg-slate-100 duration-150"
            onClick={() => handleAnswerClick(2)}
          >
            {question.choice2}
          </button>
          <button
            className="bg-white rounded-2xl w-[172px] h-[66px] text-xl text-slate-950 font-mono text-black hover:bg-slate-100 duration-150"
            onClick={() => handleAnswerClick(3)}
          >
            {question.choice3}
          </button>
          <button
            className="bg-white rounded-2xl w-[172px] h-[66px] text-xl text-slate-950 font-mono text-black hover:bg-slate-100 duration-150"
            onClick={() => handleAnswerClick(4)}
          >
            {question.choice4}
          </button>
        </div>
      </div>
    );
}
  export default Game;