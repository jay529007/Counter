import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // let values = 100;
  let [values, setValues] = useState(100);
  const addValue = () => {
    setValues(++values);
    console.log(`${values}`);
  };
  const subValue = () => {
    setValues(--values);
    console.log(`${values}`);
  };
  return (
    <>
      <h1>Counter-Project</h1>
      <div>
        <label>Value: {values}</label>{" "}
      </div>
      <br />
        <button style={{ marginRight: "20px" }} onClick={addValue}>Increse Value </button>
        <button onClick={subValue}>decrese Value</button>
    </>
  );
}

export default App;
