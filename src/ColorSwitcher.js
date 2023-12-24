import React, {useState} from 'react'

function ColorSwitcher() {
    const [colorIndex, setColorIndex] = useState(0)
    const colors= ['green', 'blue', 'orange', 'red', 'pink', 'yellow', 'black']
    const pickColor = () => {
        let newColor= (colorIndex +1) % colors.length
        setColorIndex(newColor)
    }
  return (
    <div>
        <button onClick= {pickColor} >Color Switch</button>
        <p style= {{color: colors[colorIndex]}}>Watch out for the color change!</p>
    </div>
  )
}

export default ColorSwitcher