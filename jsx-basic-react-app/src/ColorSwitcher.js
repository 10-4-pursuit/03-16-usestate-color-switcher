import { useState } from 'react'

const ColorSwitcher = () => {

    const [color, setColor] = useState('red')

    return (
        <div>
            <h1>Color Switcher</h1>
            <button onClick={() => setColor('red')}>Red</button>
            <button onClick={() => setColor('blue')}>Blue</button>
            <button onClick={() => setColor('green')}>Green</button>
            <button onClick={() => setColor('yellow')}>Yellow</button>
            <button onClick={() => setColor('orange')}>Orange</button>
            <div style={{ color: color }}>This is {color}</div>
        </div>
    )
}

export default ColorSwitcher