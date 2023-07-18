import { useState } from 'react';
import './App.css';
import QuestionCards from './Components/QuestionCards';
import shuffle from './Utis';

function App() {
  const [quizes, setQuizes] = useState(null)
  const [loaded, setLoaded] = useState(false)
  const [startQuiz, setStartQuiz] = useState(false)
  const [currentAnswers, setCurrentAnswers] = useState(null)
  const [endGame, setEndGame] = useState(false)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const fetchQuiz = async() => {
    const res = await fetch ('https://opentdb.com/api.php?amount=5&category=18&difficulty=easy&type=multiple')
    const {results} = await res.json()
    // console.log(results);
    setLoaded(true)
    // getting all answers
    const initialQuestion = results[currentQuestionIndex]
    // console.log(initialQuestion);
    // const answers =  [initialQuestion.correct_answer , ...initialQuestion.incorrect_answers]
    // console.log(answers)
    // setCurrentAnswers(answers)
    setCurrentAnswers(shuffle(initialQuestion))
    // console.log(shuffle(initialQuestion))
    setStartQuiz(true)
    setQuizes(results);
  }
  const nextQuestion = () =>{
    // flushSync
    let currentIndex = currentQuestionIndex + 1;
    // const validIndex = currentQuestionIndex + 1 < quizes.length;
    const validIndex = currentIndex < quizes.length;
    // console.log(currentQuestionIndex)
    // console.log(quizes.length)
    // console.log(validIndex)
    if(validIndex){
      // setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setCurrentQuestionIndex(currentIndex);
      // const question = quizes[currentQuestionIndex]
      const question = quizes[currentIndex]
      setCurrentAnswers(shuffle(question))
    }else{
      setEndGame(true)
      console.log('At the End')
    }
  }
  return (
    <div className="container, App">
      <div className=''>
        {endGame && <p>Its Time to show Result</p>}
        {loaded && !endGame &&<QuestionCards 
          quiz={quizes[currentQuestionIndex]} 
          answers={currentAnswers} 
          index={currentQuestionIndex}
          quizes={quizes}
          nextQuestion={nextQuestion}
          ></QuestionCards>}
      </div>
      {!startQuiz && <button onClick={fetchQuiz} className='btn btn-primary'>Start Quiz</button>}
    </div>
  );
}

export default App;
