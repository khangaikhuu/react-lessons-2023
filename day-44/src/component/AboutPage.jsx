import { Link, useLocation } from "react-router-dom";

export default function AboutPage() {

  const location = useLocation()
  const state = location.state;
  console.log(state)

  return (
    <div>
      <h1>{state.message}</h1>
      <p>{state.timestamp}</p>

      <Link to={"/"}>Back</Link>
    </div>
  );
}
