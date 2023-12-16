import React from'react';
import { useState } from 'react';

function ColorSwitcher () {
    const [color, setColor] = React.useState('blue');
    
    return (
        <div>
            <h1 style={{color:color}}>These jellybeans are {color}</h1>
            <button onClick={() => setColor('red')}>Press this button to make the jellybeans Red!</button>
        </div>
        
    )
}

export default ColorSwitcher;