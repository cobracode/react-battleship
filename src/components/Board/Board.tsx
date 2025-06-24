import "./Board.css";

const Board = ({ squares }: { squares: string[] }) => {
  return <div className="board">
    {squares.map((square, index) => (
      <div key={index} className="square">
        {square}
      </div>
    ))}
  </div>;
};

export default Board;