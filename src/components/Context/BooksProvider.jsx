import React, { createContext, useState } from "react";

export const BooksContext = createContext();

const BooksProvider = ({ children }) => {
    const [storeBooks, setStoreBooks] = useState([]);
    return (
        <BooksContext.Provider value={[storeBooks, setStoreBooks]}>
            {children}
        </BooksContext.Provider>
    );
};

export default BooksProvider;
