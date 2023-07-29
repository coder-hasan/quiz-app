import { useContext } from 'react';
import './App.css';
import QuestionCards from './Components/QuestionCards';
// import shuffle from './Utis';
import ScroreCard from './ScroreCard';
import { QuizContext } from './Context/quizContext';

function App() {
  const {loaded,
        startQuiz,
        endGame,
        fetchQuiz,
  } = useContext(QuizContext)

  return (
    <div className="container, App">
      <div className=''>
        {endGame && <ScroreCard></ScroreCard>}
        {loaded && !endGame &&<QuestionCards></QuestionCards>}
      </div>
      <div>
        {!startQuiz && <button onClick={fetchQuiz} className='btn btn-primary mt-5'>Start Quiz</button>}
      </div>
    </div>
  );
}

export default App;
