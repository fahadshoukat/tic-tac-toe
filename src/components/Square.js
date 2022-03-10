import React from "react";

const Square = ({ handleSquareClick, value }) => {
    
  return <button onClick={handleSquareClick}>
      {value}
    </button>;
};

export default Square;
