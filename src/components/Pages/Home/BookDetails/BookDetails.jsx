import { useLoaderData, useParams } from "react-router";

const BookDetails = () => {
    const params = useParams();
    // console.log(params.bookId);

    const books = useLoaderData();
    // console.log(books);

    const targetedBook = books.find(
        (target) => parseInt(params.bookId) === target.bookId,
    );
    // console.log(targetedBook);

    if (!targetedBook) {
        return <p>Book not found</p>;
    }

    const {
        bookName,
        image,
        author,
        category,
        review,
        totalPages,
        rating,
        tags,
        publisher,
        yearOfPublishing,
    } = targetedBook;
    return (
        <div>
            <div className="card lg:card-side bg-base-100 mb-25 justify-between">
                <figure className="p-10 rounded-2xl bg-[#13131317]">
                    <img
                        src={image}
                        alt={bookName}
                        className=" max-w-110 w-full h-auto"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title font-playfair text-[2.5rem]">
                        {bookName}
                    </h2>
                    <p className="text-xl font-medium opacity-80">
                        By: {author}
                    </p>
                    <div>
                        <hr className="border-[#131313] opacity-15 my-4" />
                        <span className="text-xl font-medium opacity-80">
                            {category}
                        </span>
                        <hr className="border-[#131313] opacity-15 my-4" />
                    </div>
                    <div>
                        <p className="max-w-158 w-full">
                            <span className="font-bold leading-6.5">
                                Review:{" "}
                            </span>
                            {review}
                        </p>
                    </div>
                    <div>
                        <div className="my-4 flex gap-4 items-center justify-start!">
                            <p className="font-bold max-w-10 w-full">Tags: </p>
                            <div className="flex gap-4 items-center justify-center">
                                {tags.map((tag, index) => (
                                    <p
                                        key={index}
                                        className="color-1 font-medium mr-2 text-blue-500"
                                    >
                                        #{tag}
                                    </p>
                                ))}
                            </div>
                        </div>
                        <hr className="border-[#131313] opacity-15 my-4" />
                    </div>
                    <div className="flex gap-15 mb-6">
                        <div className="space-y-5 max-w-35 opacity-75">
                            <p>Number of pages:</p>
                            <p>Publisher:</p>
                            <p>Year of Publishing:</p>
                            <p>Rating:</p>
                        </div>
                        <div className="space-y-5 font-semibold">
                            <p>{totalPages}</p>
                            <p>{publisher}</p>
                            <p>{yearOfPublishing}</p>
                            <p>{rating}</p>
                        </div>
                    </div>
                    <div className="card-actions">
                        <button className="btn btn-outline">Read</button>
                        <button className="btn btn-info">Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;
