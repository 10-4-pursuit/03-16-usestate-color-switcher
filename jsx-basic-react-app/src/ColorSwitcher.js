import react, { useState } from 'react';


function ColorSwitcher() {
    const [color, setColor] = useState('red');

    return (
        <div>
            <button style = {{color: 'red'}} onClick={() => setColor('purple')}>Red</button>
            <button style = {{color: 'blue'}} onClick={() => setColor('yellow')}>Blue</button>
            <button style = {{color: 'green'}} onClick={() => setColor('pink')}>Green</button>
            <h1>{color}</h1>
        </div>
    )
}

export default ColorSwitcher