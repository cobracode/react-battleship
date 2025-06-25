import { useState } from "react";
import { BOARD_SIZE, EMPTY_SQUARE } from "../constants/constants";

const useGameLogic = () => {
  const [squares, setSquares] = useState<string[]>(Array(BOARD_SIZE * BOARD_SIZE).fill(EMPTY_SQUARE));

  const resetGame = () => {
    //setSquares(Array(BOARD_SIZE * BOARD_SIZE).fill(EMPTY_SQUARE));
    alert("Resetting game!");
    window.location.reload();
  };

  const handleSquareClick = (index: number) => {
    const newSquares = [...squares];
    newSquares[index] = "X";
    setSquares(newSquares);
  };

  return { squares, resetGame, handleSquareClick };
};

export default useGameLogic;