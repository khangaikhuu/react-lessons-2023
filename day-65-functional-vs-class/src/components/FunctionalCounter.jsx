import { useEffect, useState } from "react";

const FunctionalCounter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component mounted");
    console.log(`You clicked ${count} times`);
  }, [count]);

  const increase = () => {
    setCount(count + 1);
  };

  return (
    <div style={{ margin: "50px" }}>
      <h2>{count}</h2>
      <button onClick={increase}>Add</button>
    </div>
  );
};

export { FunctionalCounter };
