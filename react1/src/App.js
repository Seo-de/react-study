import "./App.css";
import React, { useState } from "react";

function App() {
  const [minutes, setMinutes] = React.useState(0);
  const [box, setBox] = React.useState();

  const onChange = (event) => {
    setMinutes(event.target.value);
  };

  const reset = () => {
    setMinutes(0);
  };

  const makeBox = () => {
    setBox(minutes / 60);
  };

  function boxes(box) {
    let arr = [];
    for (let i = 1; i <= box; i++) {
      arr.push(
        <div
          style={{
            border: "1px solid black",
            backgroundColor: "black",
            width: "50px",
            height: "50px",
            color: "white",
            textAlign: "center",
          }}
        >
          {i}
        </div>
      );
    }

    return arr;
  }

  return (
    <div>
      <div>
        <h1 className="hi">Super Converter</h1>
        <label htmlFor="minutes">Minutes</label>
        <input
          value={minutes}
          id="minutes"
          placeholder="Minutes"
          type="number"
          onChange={onChange}
        />
      </div>
      <div>
        <label htmlFor="hours">Hours</label>
        <input
          value={Math.round(minutes / 60)}
          id="hours"
          placeholder="Hours"
          type="number"
          disabled
        />
      </div>
      <button onClick={reset}>Reset</button>
      <button onClick={makeBox}>Make Box</button>
      <div
        style={{
          width: "50%",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        {boxes(box)}
      </div>
    </div>
  );
}

export default App;
