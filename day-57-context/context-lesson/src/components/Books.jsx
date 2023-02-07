import { useContext } from "react";
import { BooksContext } from "../contexts/BookContext";
import Book from "./Book";

export default function Books() {
  const list = useContext(BooksContext);
  return (
    <ul>
      {list.map((item, index) => {
        return <Book key={index} item={item} />;
      })}
    </ul>
  );
}
