import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";

export default function UserInfo() {
  const userName = useContext(UserContext);
  return <span>{userName}</span>;
}
