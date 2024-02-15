import { useState } from "react";

function ColorSwitcher() {
    const [color, setColor] = useState("pink");

    return (

        <div>
            <button
                onClick={() => setColor("red")}
                style={{ backgroundColor: color }}
            >
                Red
            </button>
            <button
                onClick={() => setColor("blue")}
                style={{ backgroundColor: color }}
            >
                Blue
            </button>
        </div>
    )
}  

    export default ColorSwitcher