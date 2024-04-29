import "./App.css";
import React, { useState } from "react";
import StringUtils from "./stringUtils";

function App() {
  const stringUtils = new StringUtils();

  const [value, setValue] = useState("");
  const [output, setOutput] = useState("");

  return (
    <div className="App">
      <div>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={() =>setOutput(stringUtils.manipulateString(value))}>Manipulate The String</button>
        <div>{`Output: ${output}`}</div>
      </div>
    </div>
  );
}

export default App;
