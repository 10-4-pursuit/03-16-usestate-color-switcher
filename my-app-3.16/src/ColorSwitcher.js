import React, { useState } from "react";

function ColorSwitcher() {
  const [color, setColor] = React.useState("red");

const generateRandomColor = () => {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
};

  const handleClick = () => {
    const randomColor = generateRandomColor();
    setColor(randomColor);
  };

  return (
    <div>
      <p style={{ color: color }}>{color}</p>
      <button onClick={handleClick}>Switch</button>
    </div>
  );
}

export default ColorSwitcher;
