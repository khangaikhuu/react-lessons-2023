import { useState, useEffect } from "react";

export default function Button() {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (isPlaying) {
      console.log("It is playing");
    } else {
      console.log("It is not playing");
    }
  }, [isPlaying]);

  function handleClick() {
    console.log("You clicked me!");
    setIsPlaying(!isPlaying);
  }

  return <button onClick={handleClick}>Click me</button>;
}
