import { useState } from "react";
import { BOARD_SIZE, EMPTY_SQUARE } from "../constants/constants";

const useGameLogic = () => {
  const [squares, setSquares] = useState<string[]>(Array(BOARD_SIZE * BOARD_SIZE).fill(EMPTY_SQUARE));

  return { squares, setSquares };
};

export default useGameLogic;