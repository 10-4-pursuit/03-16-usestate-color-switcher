import React, { useState } from 'react';

const ColorSwitcher = () => {
  const [color, setColor] = useState('black');

  const changeColor = () => {
    // Generating a random color
    const newColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    setColor(newColor);
  };

  return (
    <div>
      <button onClick={changeColor}>Change Color</button>
      <div style={{ color }}>
        <p>Text displayed in the current color.</p>
      </div>
    </div>
  );
};

export default ColorSwitcher;