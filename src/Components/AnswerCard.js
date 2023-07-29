import React, { useContext } from 'react';
import { QuizContext } from '../Context/quizContext';
import './AnswerCard.css'; 

const AnswerCard = ({answer}) => {
    const {handlePickedAnswer,
        correctAnswer,
        pickedAnswer} = useContext(QuizContext)

    const isRight = pickedAnswer && answer === correctAnswer;
    const isWrong = pickedAnswer && answer === pickedAnswer && pickedAnswer !== correctAnswer;
    const correctClass = isRight ? 'correct-answer' : '' ;
    const wrongClass = isWrong ? 'wrong-answer' : '' ;
    const disableClass = pickedAnswer && 'disabled-answer'
    // User Selected Answer
    // User Picked answer
    // Correct Answer
    return (
        <div>
            <h4 className={`single-answer ${correctClass} ${wrongClass} ${disableClass}`} onClick={() => handlePickedAnswer(answer)}>{answer}</h4>
        </div>
    );
};

export default AnswerCard;