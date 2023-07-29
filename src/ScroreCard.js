import React, { useContext } from 'react';
import { QuizContext } from './Context/quizContext';

const ScroreCard = () => {
    const {totalScore, resetQuiz} = useContext(QuizContext)
    return (
        <div>
            <h3>Your Schore is {totalScore}</h3>
            <button onClick={resetQuiz} className='btn btn-primary mt-5'>Reset Quiz</button>
        </div>
    );
};

export default ScroreCard;