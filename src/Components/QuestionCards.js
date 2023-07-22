import React from 'react';
import AnswerCard from './AnswerCard';

const QuestionCards = ({
    quiz, 
    answers, 
    index, 
    quizes, 
    nextQuestion, 
    pickAnswer,
    correctAnswer,
    pickedAnswer,
}) => {
    // console.log(index)
    return (
        <div className='mt-5'>
            {/* {quiz} */}
            <h4>Question: {index + 1} / {quizes.length}</h4>
            <h3 className='mt-4 mb-3'>{quiz.question}</h3>
            {answers.map((answer, i) => <AnswerCard 
            key={i} 
            answer={answer} 
            pickAnswer={pickAnswer} 
            correctAnswer={correctAnswer}
            pickedAnswer={pickedAnswer}
            ></AnswerCard>)}
            <button onClick={nextQuestion} className='btn btn-success'>Next</button>
        </div>
    );
};

export default QuestionCards;