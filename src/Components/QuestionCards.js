import React from 'react';
import AnswerCard from './AnswerCard';

const QuestionCards = ({quiz, answers, index, quizes, nextQuestion}) => {
    // console.log(index)
    return (
        <div>
            {/* {quiz} */}
            <h4>Question: {index + 1} / {quizes.length}</h4>
            <h3>{quiz.question}</h3>
            {answers.map((answer, i) => <AnswerCard key={i} answer={answer}></AnswerCard>)}
            <button onClick={nextQuestion} className='btn btn-success'>Next</button>
        </div>
    );
};

export default QuestionCards;