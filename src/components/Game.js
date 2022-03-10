import { calculateWinner } from '../calculateWinner'; 
import React, { useState } from 'react'
import Board from './Board'

const Game = () => {

    const [board, setBoard] = useState(Array(9).fill(null));

    const [xIsNext, setXIsNext] = useState(true);

    const winner = calculateWinner(board)
  
    const handleClick = () => {

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