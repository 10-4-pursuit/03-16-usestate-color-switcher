import React, { useState } from 'react';

const ColorSwitcher = () => {
    const [currentColor, setCurrentColor] = useState('black');
    
    const colors = ['red', 'blue', 'green', 'orange','turquoise', 'purple', 'pink', 'brown','black'];
    
    const handleColorChange = () => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        setCurrentColor(randomColor);
    };

    return (
     <div>
        <button onClick={handleColorChange}> Change Color</button>
        <p style={{ color: currentColor}}> The color is {currentColor} </p>
    </div>
    );
};

export default ColorSwitcher; 