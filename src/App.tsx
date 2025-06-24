import "./App.css"
import GameStatus from "./components/GameStatus/GameStatus"
import Board from "./components/Board/Board"
import useGameLogic from "./hooks/useGameLogic"

function App() {
  const { squares } = useGameLogic();

  return (
    <>
      <GameStatus />
      <Board squares={squares} />
      <button onClick={() => window.location.reload()}>Restart</button>
    </>
  )
}

export default App
