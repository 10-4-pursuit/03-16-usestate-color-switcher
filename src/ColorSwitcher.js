import React, { useState } from 'react';

function ColorSwitcher() {
    const colors = ['red', 'orange', 'black', 'green']
    const [currentColor, setCurrentColor] =  useState('yellow');

    const changeColor = () => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        setCurrentColor(randomColor);
    };

    return (
        <div>
            <button onClick={ changeColor }> Change Color</button>
            <p style={{ color: currentColor }}>Text in { currentColor } color</p>
        </div>
    );
}

export default ColorSwitcher;