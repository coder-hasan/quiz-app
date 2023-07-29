import React, { useContext } from 'react';
import AnswerCard from './AnswerCard';
import { QuizContext } from '../Context/quizContext';

const QuestionCards = () => {
    const { 
    currentAnswers, 
    currentQuestionIndex, 
    quizes, 
    nextQuestion} = useContext(QuizContext)
    const quiz = quizes[currentQuestionIndex]
    return (
        <div className='mt-5'>
            {/* {quiz} */}
            <h4>Question: {currentQuestionIndex + 1} / {quizes.length}</h4>
            <h3 className='mt-4 mb-3'>{quiz.question}</h3>
            {currentAnswers.map((answer, i) => <AnswerCard 
            key={i} 
            answer={answer}
            ></AnswerCard>)}
            <button onClick={nextQuestion} className='btn btn-success'>Next</button>
        </div>
    );
};

export default QuestionCards;