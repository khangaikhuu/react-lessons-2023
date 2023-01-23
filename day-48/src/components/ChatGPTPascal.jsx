import React, { useState } from "react";
import "./PascalTriangle.css";

const PascalTriangle = () => {
  const [rows, setRows] = useState(5);

  const pascalTriangle = (n) => {
    let triangle = [[1]];

    for (let i = 1; i < n; i++) {
      let row = [1];
      for (let j = 1; j < i; j++) {
        row.push(triangle[i - 1][j - 1] + triangle[i - 1][j]);
      }
      row.push(1);
      triangle.push(row);
    }
    return triangle;
  };

  const handleChange = (event) => {
    setRows(event.target.value);
  };

  return (
    <div className="triangle-container">
      <div className="triangle-controls">
        <label>Enter number of rows:</label>
        <input
          type="number"
          value={rows}
          onChange={handleChange}
          min="1"
          max="10"
        />
      </div>
      <div className="triangle">
        {pascalTriangle(rows).map((row, i) => (
          <div key={i} className="triangle-row">
            {row.map((num, j) => (
              <div key={j} className="triangle-cell">
                {num}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PascalTriangle;
