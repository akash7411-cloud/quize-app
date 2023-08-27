import { useState } from "react";
import "./App.css";
import QuizView from "./components/QuizView";
import ScoreView from "./components/ScoreView";

function App() {
  const questions = [
  
    {
       question: "1. 2+6?",
       answers: [{ text: "7" }, 
       { text: "6" }, 
       { text: "4" },
     {text:"8",isCorrect: true},
     ],
     },
   
   
    {
       question: "2. 3-7?",
       answers: [{ text: "4",isCorrect: true }, 
       { text: "5" }, 
       { text: "3" },
     {text:"2"},
     ],
     },
   
   
   
    {
       question: "3. 2*8",
       answers: [{ text: "18" }, 
       { text: "14" }, 
       { text: "16",isCorrect: true },
     {text:"20"},
     ],
     },
   
   
    {
       question: "4. 2+2*6",
       answers: [{ text: "26" }, 
       { text: "222" }, 
       { text: "28" },
     {text:"24",isCorrect: true},
     ],
     },
   
    {
       question: "5. 2+6+8*2",
       answers: [{ text: "32",isCorrect: true }, 
       { text: "38" }, 
       { text: "40" },
     {text:"42"},
     ],
     },
   
   
   
   
     {
       question: "6. What is three fifth of 100?",
       answers: [{ text: "3" }, 
       { text: "5" }, 
       { text: "20" },
     {text:"60",isCorrect: true},
     ],
     },
     {
       question: " 7. If David’s age is 27 years old in 2011. What was his age in 2003?",
       answers: [
         { text: "17 years" },
         { text: "37 years" },
         { text: "20 years" },
         { text: "19 years" , isCorrect: true },
       ],
     },
     {
       question: "8. What is the remainder of 21 divided by 7?",
       answers: [
         { text: "21" },
         { text: "7" },
         { text: "1" },
         { text: "None", isCorrect: true },
       ],
     },
     {
       question: " 9. What is 7% equal to?",
       answers: [
         { text: "0.007" },
         { text: "0.07"},
         { text: "0.7" },
         { text: "7",isCorrect: true  },
       ],
     },
     {
       question: " 10. I am a number. I have 7 in the ones place. I am less than 80 but greater than 70. What is my number?",
       answers: [
         { text: "71" },
         { text: "73" },
         { text: "75" },
         { text: "77",isCorrect: true },
       ],
     },
   ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isQuizOver, setIsQuizOver] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerClick = (isCorrect) => {
    // check score
    if (isCorrect) setScore(score + 1);

    const next = currentQuestion + 1;
    if (next < questions.length) setCurrentQuestion(next);
    else setIsQuizOver(true);
  };

  const handleResetClick = () => {
    // fix: score not resetting
    setScore(0);

    setCurrentQuestion(0);
    setIsQuizOver(false);
  };

  return (
    <div className="App">
      {isQuizOver ? (
        <ScoreView handleResetClick={handleResetClick} score={score} />
      ) : (
        <QuizView
          questions={questions}
          currentQuestion={currentQuestion}
          handleAnswerClick={handleAnswerClick}
        />
      )}
    </div>
  );
}

export default App;
