import { useState } from "react";

export default function Panel({ title, children }) {
  const [isActive, setIsActive] = useState(false);

  let render = (
    <button
      onClick={() => {
        setIsActive(true);
      }}
    >
      Show
    </button>
  );

  if (isActive) {
    render = <p>{children}</p>;
  }

  return (
    <div>
      <h3>{title}</h3>
      {isActive ? (
        <p>{children}</p>
      ) : (
        <button
          onClick={() => {
            setIsActive(true);
          }}
        >
          Show
        </button>
      )}
    </div>
  );
}
