import React from 'react';

function ColorSwitcher() {
    const [color, setColor] = React.useState('blue');

    const colorChange = () => {
        setColor(color === 'blue' ? 'red' : 'blue');
    };

    return (
        <div>
            <button onClick={colorChange}>Change Color</button>
            <h1 style={{ color: color }}> {color} </h1>
        </div>
    )
}

export default ColorSwitcher;