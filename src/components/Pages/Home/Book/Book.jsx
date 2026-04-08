import React from "react";

const Book = ({ book }) => {
    const { bookName, image, author, tags, category, rating } = book;
    return (
        <div className="card bg-base-100 w-96 shadow-sm border border-gray-200">
            <figure className="p-6 m-6 mb-0 bg-[#F3F3F3] rounded-xl">
                <img className="max-w-33 max-h-42" src={image} alt={bookName} />
            </figure>
            <div className="card-body">
                <div>
                    {tags.map((tag, i) => (
                        <div
                            key={i}
                            className="badge badge-soft badge-success text-green-500!"
                        >
                            {tag}
                        </div>
                    ))}
                </div>
                <h2 className="card-title">{bookName}</h2>
                <p>By: {author}</p>
                <hr className="border-2 border-gray-300 my-4 border-dashed" />
                <div className="card-actions justify-between">
                    <div className="badge badge-outline">{category}</div>
                    <span className="text-base">{rating}★</span>
                </div>
            </div>
        </div>
    );
};

export default Book;
