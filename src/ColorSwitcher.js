import React from 'react';

const colorNames = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const getRandomColor = () => {
    const randomNess = Math.floor(Math.random() * colorNames.length);
    return colorNames[randomNess];
}
function ColorSwitcher() {
    const [color, setColor] = React.useState('blue');
    const handleColorSwitch = () => {
        setColor(getRandomColor());
    };

    return (
    <div>
        <button onClick={handleColorSwitch}>Switch Color</button>
        <p style={{color: color}}>Current Color</p>
    </div>
    );    
}

export default ColorSwitcher;