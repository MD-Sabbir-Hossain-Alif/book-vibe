import React, { use } from "react";
import Book from "../Book/Book";

const bookPromise = fetch("/booksData.json").then((res) => res.json());

const AllBooks = () => {
    const books = use(bookPromise);
    // console.log(books);
    return (
        <div className="my-32">
            <h2 className="text-[2.5rem] font-bold font-playfair text-center mb-9">
                Books
            </h2>
            <section className="grid grid-cols-3 gap-6">
                {books.map((book) => (
                    <Book key={book.bookId} book={book}></Book>
                ))}
            </section>
        </div>
    );
};

export default AllBooks;
