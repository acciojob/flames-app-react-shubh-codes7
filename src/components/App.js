import React, { useState } from "react";
import "../styles/App.css";

const App = () => {
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [result, setResult] = useState("");

  const handleCalculate = (e) => {
    e.preventDefault();

    if (!name1 || !name2) {
      setResult("Please Enter valid input");
      return;
    }

    // Example logic: Flames-like result based on name lengths
    const totalLength = name1.replace(/\s/g, "").length + name2.replace(/\s/g, "").length;
    const outcomes = ["Siblings", "Friends", "Love", "Affection", "Marriage", "Enemy"];
    const relationship = outcomes[totalLength % outcomes.length];

    setResult(relationship);
  };

  const handleClear = (e) => {
    e.preventDefault();
    setName1("");
    setName2("");
    setResult("");
  };

  return (
    <div id="main">
      <form>
        <input
          type="text"
          placeholder="Enter first name"
          data-testid="input1"
          name="name1"
          value={name1}
          onChange={(e) => setName1(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter second name"
          data-testid="input2"
          name="name2"
          value={name2}
          onChange={(e) => setName2(e.target.value)}
        />
        <button data-testid="calculate_relationship" onClick={handleCalculate}>
          Calculate Relationship Future
        </button>
        <button data-testid="clear" onClick={handleClear}>
          Clear
        </button>
      </form>
      <h3 data-testid="answer">{result}</h3>
    </div>
  );
};

export default App;
