import { calculateWinner } from '../calculateWinner'; 
import React, { useState } from 'react'
import Board from './Board'

const Game = () => {

    const [board, setBoard] = useState(Array(9).fill(null));

    const [xIsNext, setXIsNext] = useState(true);

    const winner = calculateWinner(board)
  
    const handleClick = (i) => {

        const tempBoard = [...board];

        // if user click an occupied square or if game is won, return
        if(winner || tempBoard[i]) return;

        // Put an X or an O in the clicked square
        tempBoard[i] = xIsNext ? 'X' : 'O';
        setBoard(tempBoard);
        setXIsNext(!xIsNext);

    }

    const jumpTo = () => {

    }

    const renderMoves = () => {

    }

    return (
        <Board squares={board} onClick={handleClick} />
    )
}


export default Game