import React, { useState } from "react";

function ColorPicker() {
  const [color, setColor] = useState("#eee6e6");

  function handleColorChange(event) {
    setColor(event.target.value);
  }

  return (
    <>
      <div className="color-picker-container">
        <h1>color picker</h1>
        <div className="color-display" style={{ background: color }}>
          <p>selected color : {color}</p>{" "}
        </div>

        <label>select a color</label>
        <input type="color" value={color} onChange={handleColorChange}></input>
      </div>
    </>
  );
}

export default ColorPicker;
