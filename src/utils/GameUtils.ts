import { BOARD_SIZE, EMPTY_SQUARE, SHIPS_PER_PERSON } from "../constants/constants";

const GameUtils = {
  // Returns the squares with both players' ships assigned
  initBoard: (shipsPerPerson: number = SHIPS_PER_PERSON) => {
    const squares = Array(BOARD_SIZE * BOARD_SIZE).fill(EMPTY_SQUARE);
  },

  getRandomShipPosition: (boardSize: number) => {
    return Math.floor(Math.random() * boardSize * boardSize);
  },
};

export default GameUtils;