import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div>
      <h1> Header </h1>
      <nav>
        <Link
          to="/login"
          className={activeIndex === 0 ? "active" : ""}
          setActiveIndex={() => setActiveIndex(2)}
          replace={true}
        >
          Login
        </Link>
        <Link
          to="/register"
          className={activeIndex === 1 ? "active" : ""}
          onClick={() => {
            setActiveIndex(1);
          }}
          replace={true}
        >
          Register
        </Link>
        <Link
          to="/accordion"
          className={activeIndex === 2 ? "active" : ""}
          onClick={() => {
            setActiveIndex(2);
          }}
          replace={true}
        >
          Accordion
        </Link>
      </nav>
    </div>
  );
}
