import './App.css'
import GameStatus from './components/GameStatus/GameStatus'
import Board from './components/Board/Board'

function App() {
  const squares: string[] = Array(25).fill('hi');

  return (
    <>
      <GameStatus />
      <Board squares={squares} />
      <button>Restart</button>
    </>
  )
}

export default App
