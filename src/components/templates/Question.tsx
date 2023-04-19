import React, { useState, useEffect, useRef } from "react";

interface QuestionProps {
  question: string;
  answer: string;
  onAnswered: (isCorrect: boolean) => void;
}

const Question: React.FC<QuestionProps> = ({
  question,
  answer,
  onAnswered,
}) => {
  const [userAnswer, setUserAnswer] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleAnswerSubmit = () => {
    const isCorrect = userAnswer.toLowerCase() === answer.toLowerCase();
    onAnswered(isCorrect);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleAnswerSubmit();
    }
  };

  return (
    <div>
      <p>{question}</p>
      <input
        type="text"
        value={userAnswer}
        onChange={(e) => setUserAnswer(e.target.value)}
        onKeyDown={handleKeyDown}
        ref={inputRef}
      />
      <button onClick={handleAnswerSubmit}>Check Answer</button>
    </div>
  );
};

export default Question;
