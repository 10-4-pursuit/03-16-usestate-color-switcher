// Import the necessary modules from the 'react' library
import React from "react";

// Define a functional component named 'ColorSwitcher'
function ColorSwitcher() {
    // Declare a state variable 'color' with initial value 'blue' and a function 'setColor' to update it
    const [color, setColor] = React.useState("blue");
    // Define a function 'changeColor'
    const changeColor = () => {
        // Toggle between 'blue' and 'green' colors
        const newColor = color === 'blue' ? 'green' : 'blue';
        // Update the 'color' state with the new color
        setColor(newColor);
      };
      // Return JSX (React elements) representing the component's UI
    return (<div>
         {/* Display a heading with dynamic color based on the 'color' state */}
        <h1 style={{ color: color }}> 
        This is {color}!</h1>
        {/* Display a button with an event handler to call the 'changeColor' function on click */}
        <button onClick={changeColor}>Change Color</button>
    </div>
    );
};
// Export the 'ColorSwitcher' component as the default export
export default ColorSwitcher;