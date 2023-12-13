import React, { useState } from "react";

function ColorSwitcher(props) {
    const [color, setColor] = useState('red');
    const colors = ['red', 'green', 'blue'];

    function changeColor() {
        const currentIndex = colors.indexOf(color);
        const nextIndex = (currentIndex + 1) % colors.length;
        const nextColor = colors[nextIndex];
        setColor(nextColor);
    }

  return (
    <div>
        <p>Current color: {color}</p>
        <button onClick={() => setColor(changeColor)}>Change Color</button>
    </div>
  );
}

export default ColorSwitcher;