import React, { useState } from 'react';
import './ColorSwitcher.css'; 

const ColorSwitcher = () => {
  const [currentColor, setCurrentColor] = useState('black');

  const colors = ['red', 'blue', 'green', 'yellow', 'purple'];

  const changeColor = () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setCurrentColor(randomColor);
  };

  return (
    <div>
      <button onClick={changeColor}>Change Color</button>
      <p className="text" style={{ color: currentColor }}>Text in {currentColor} color</p>
    </div>
  );
};

export default ColorSwitcher;
