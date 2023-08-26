import React, { useEffect, useState } from "react";

function Question({ question, onAnswered }) {
  const [timeRemaining, setTimeRemaining] = useState(10);
  // const [intervalID,setIntervalId] = useState(null);

  // add useEffect code
  useEffect(()=>{
    const timeOutId = setTimeout(()=>{
      setTimeRemaining(beforeTime=> (beforeTime > 0 ? beforeTime - 1: beforeTime))
    },1000)
    return function cleanUp(){
      clearTimeout(timeOutId)
    } 
  },[timeRemaining])

 useEffect(()=>{
  if(timeRemaining === 0){
    onAnswered(false)
  }
 },[timeRemaining,onAnswered])

  

    
  


  function handleAnswer(isCorrect) {
    
    setTimeRemaining(10);
    onAnswered(isCorrect);
  }

  const { id, prompt, answers, correctIndex } = question;

  return (
    <>
      <h1>Question {id}</h1>
      <h3>{prompt}</h3>
      {answers.map((answer, index) => {
        const isCorrect = index === correctIndex;
        return (
          <button key={answer} onClick={() => handleAnswer(isCorrect)}>
            {answer}
          </button>
        );
      })}
      <h5>{timeRemaining} seconds remaining</h5>
    </>
  );
}

export default Question;
