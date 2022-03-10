import { calculateWinner } from "../calculateWinner";
import React, { useState } from "react";
import Board from "./Board";

const styles = {
    width: '200px',
    margin: '20px auto'
}
const h1Style = {
    textAlign: 'center'
}
const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));

  const [xIsNext, setXIsNext] = useState(true);

  const winner = calculateWinner(board);

  const handleClick = (i) => {
    const tempBoard = [...board];

    // if user click an occupied square or if game is won, return
    if (winner || tempBoard[i]) return;

    // Put an X or an O in the clicked square
    tempBoard[i] = xIsNext ? "X" : "O";
    setBoard(tempBoard);
    setXIsNext(!xIsNext);
  };

  const jumpTo = () => {};

  const renderMoves = () => {

    return <button onClick={() => {setBoard(Array(9).fill(null))}}>Start Game</button>
  };

  return (
    <>
    <h1 style={h1Style}>Tic Tac Toe</h1>
      <Board squares={board} onClick={handleClick} />
      <div style={styles}>
          <p>
              {winner ? 'Winner:' + winner : "Next Player:" + (xIsNext ? 'X' : 'O')}
          </p>
          {renderMoves()}
      </div>
    </>
  );
};

export default Game;
