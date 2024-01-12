import React, { useState } from 'react';

const ColorSwitcher = () => {
  const [currentColor, setCurrentColor] = useState('blue');

  const changeColor = () => {
    setCurrentColor(currentColor === 'blue' ? 'red' : 'blue');
  };

  return (
    <div>
      <button onClick={changeColor}>Switch Color</button>
      <p style={{ color: currentColor }}>This text is in {currentColor} color.</p>
    </div>
  );
};

export default ColorSwitcher;