import './App.css'
import { Gamecard } from './components/gamecard'
import { ResultModal } from './components/resultModal'
import  Spinner from './components/spinner'
import { useGameContext } from './context'

function App() {

  const {questions, index, showResult} = useGameContext()  
  
  return (
    <div className='quizapp__container'>
      <h1 className='title'> FlexQuiz </h1>
      {questions.length > 0 ? <Gamecard item={questions[index]} questionNumber={index + 1} length={questions.length} /> : <Spinner />}
      {showResult ? <ResultModal /> : null}
    </div>
  )
}

export default App
