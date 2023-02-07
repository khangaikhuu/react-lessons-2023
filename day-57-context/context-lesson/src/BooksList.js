import Books from "./components/Books";
import { BooksContextProvider } from "./contexts/BookContext";

export default function BooksList() {
    return (
        <div>
            <BooksContextProvider>
                <Books />
            </BooksContextProvider>
        </div>
    )
}