import { useState } from "react";
import { useEffect } from "react";

export default function Anime() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    // Code here will run after *every* render
    console.log("My Anime Component");
    setCount(count + 1);
  }, []);
  //   console.log("My componet");
  console.log(count);

  function handleClick(e) {
    console.log("You clicked me");
  }

  return (
    <div>
      <h1>Day-48 - UseEffect with Anime</h1>
      <button
        onClick={(e) => {
          handleClick(e);
          setCount(count + 1);
        }}
      >
        Anime Click
      </button>
    </div>
  );
}
