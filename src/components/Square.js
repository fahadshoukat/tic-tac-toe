import React from "react";

const squareStyle = {
    background: 'orange',
    border: '2px solid lightgreen',
    fontSize: '30px',
    fontWeight: '800',
    cursor: 'pointer',
    outline: 'none'
}

const Square = ({ onClick, value }) => {

  return <button style={squareStyle} onClick={onClick}>
      {value}
    </button>;
};

export default Square;
