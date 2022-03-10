import React from 'react'
import Square from './Square'

const boardStyle = {
    border: '5px solid lightgreen',
    borderRadius: '10px',
    width: '250px',
    height: '250px',
    margin: '0 auto',
    display: 'grid',
    gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)'
}

const Board = ({onClick, squares}) => {

   return <div style={boardStyle}>
       {
           squares.map((square, index) => {
               return <Square key={index} value={square} onClick={() => onClick(index)} />
           })
       }
    </div>
}

export default Board