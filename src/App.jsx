import { useState } from "react";

function App() {
  // let values = 100;
  let [values, setValues] = useState(1);
  const addValue = () => {
    setValues(values +1);
    // console.log(`${values}`);
  };
  const subValue = () => {
    setValues(values -1);
    // console.log(`${values}`);
  };
  return (
    <>
      <h1>Counter-Project</h1>
      <div>
        <label>Value: {values}</label>{" "}
      </div>
      <br />
      <button style={{ marginRight: "20px" }} onClick={addValue}>
        Increse Value{" "}
      </button>
      <button onClick={subValue}>Decrese Value</button>
    </>
  );
}

export default App;
