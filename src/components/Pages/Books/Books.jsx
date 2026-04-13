import React from "react";

const Books = () => {
    return (
        <div>
            <div className="py-8 bg-[#13131315] rounded">
                <h1 className="text-center text-3xl font-bold">Books</h1>
            </div>
            <div className="my-8 flex justify-center items-center">
                <button className="btn bg-[#23BE0A] text-white!">
                    Shot By
                </button>
            </div>
            <div>
                {/* name of each tab group should be unique */}
                <div className="tabs tabs-lift">
                    <input
                        type="radio"
                        name="my_tabs_3"
                        className="tab"
                        aria-label="Books"
                    />
                    <div className="tab-content bg-base-100 border-base-300 p-6">
                        Books content
                    </div>

                    <input
                        type="radio"
                        name="my_tabs_3"
                        className="tab"
                        aria-label="Wishlist"
                        defaultChecked
                    />
                    <div className="tab-content bg-base-100 border-base-300 p-6">
                        Wishllist content
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Books;
