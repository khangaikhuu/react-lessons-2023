import React, { useState } from "react";

function PascalTriangle() {
  const [levels, setLevels] = useState(5); // Number of levels in the triangle
  const [triangle, setTriangle] = useState([]); // Array to hold the triangle

  // Recursive function to generate the triangle
  function generateTriangle(levels) {
    if (levels === 0) {
      return [[1]];
    }
    const prevLevels = generateTriangle(levels - 1);
    const currentLevel = [1];
    for (let i = 1; i < levels; i++) {
      currentLevel.push(
        prevLevels[levels - 2][i - 1] + prevLevels[levels - 2][i]
      );
    }
    currentLevel.push(1);
    prevLevels.push(currentLevel);
    return prevLevels;
  }

  // Function to handle changes to the number of levels
  function handleChange(e) {
    setLevels(e.target.value);
    setTriangle(generateTriangle(e.target.value));
  }

  // Function to render the triangle
  function renderTriangle() {
    return triangle.map((level, index) => {
      return (
        <div key={index}>
          {level.map((number, index) => {
            return <span key={index}>{number}</span>;
          })}
        </div>
      );
    });
  }

  return (
    <div>
      <label>Number of levels:</label>
      <input type="number" value={levels} onChange={handleChange} />
      <div>{renderTriangle()}</div>
    </div>
  );
}

export default PascalTriangle;
