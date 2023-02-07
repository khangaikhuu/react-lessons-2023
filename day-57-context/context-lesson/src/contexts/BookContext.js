import { createContext } from "react";
import { DATA } from "../data/data";

const BooksContext = createContext(null)

const BooksContextProvider = ({ children }) => {
    const bookData = DATA
    return (
        <BooksContext.Provider value={bookData}>
            {children}
        </BooksContext.Provider>
    )
}

export { BooksContext, BooksContextProvider }
