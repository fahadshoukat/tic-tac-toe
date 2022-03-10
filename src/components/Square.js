import React from "react";

const Square = ({ onClick, value }) => {

  return <button onClick={onClick}>
      {value}
    </button>;
};

export default Square;
