import './styles/App.css'
import GameField from './components/GameField';

function App() {
  return (
    <>
      <h1>
        Memory Game
      </h1> 
      <p>Click every card without clicking the same one twice.</p>
      <GameField />
    </>
  )
}

export default App
