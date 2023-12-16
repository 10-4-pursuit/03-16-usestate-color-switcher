import React, {useState} from "react";

function ColorSwitcher() {
    const [color, setColor] = useState ('blue');
    const otherColor = () => {
        setColor((color) => (color === 'blue' ? 'red': 'blue'));
    }

    return (
        <div>
           <h1 style={{ color }}>The BEST color ever? {color} </h1>   
        <button onClick={otherColor}>Answer</button>   
        </div>
       
    )
}

export default ColorSwitcher;