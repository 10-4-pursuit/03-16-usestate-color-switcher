import React, {useState} from 'react';

function ColorSwitcher () {
    const [color, setColor] = React.useState('green');
    const handleClick = () => {
        const newColor = color === 'green' ? 'red' : 'green';
        setColor(newColor);
    }
    return (
        <div>
            <button onClick={handleClick}>Change Color</button>
            <p style ={{color}}>The current color is {color}</p>
        </div>
    ) 
}

export default ColorSwitcher;