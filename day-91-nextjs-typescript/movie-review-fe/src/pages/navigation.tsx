import { useRouter } from "next/router";
import React from "react";

export default function NavigationPage(): JSX.Element {
  const [navigate, setNavigate] = React.useState(false);

  const router = useRouter();

  React.useEffect(() => {
    if (navigate) {
      router.push("/contact");
    }
  }, [navigate]);

  return (
    <div>
      <h1>Navigation Bar</h1>
      <button onClick={() => setNavigate(true)}>Contact</button>
    </div>
  );
}
