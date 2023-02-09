import React from "react";
import { useRef } from "react";

function InputFocus() {
  const inputUseref = useRef(null);

  const handleFocus = () => {
    inputUseref.current.focus();
  };

  const handleBlur = () => {
    inputUseref.current.blur();
  };

  return (
    <>
      <input type="text" ref={inputUseref} />
      <button onClick={handleFocus}>Focus</button>
      <button onClick={handleBlur}>Blur</button>
    </>
  );
}

export default InputFocus;
