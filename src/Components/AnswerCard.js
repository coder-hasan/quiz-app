import React from 'react';
import './AnswerCard.css'; 

const AnswerCard = ({
    answer, 
    pickAnswer, 
    correctAnswer,
    pickedAnswer
}) => {
    const isRight = pickedAnswer && answer === correctAnswer
    // User Selected Answer
    // User Picked answer
    // Correct Answer
    return (
        <div>
            <h4 className='single-answer' onClick={() => pickAnswer(answer)}>{answer}</h4>
        </div>
    );
};

export default AnswerCard;