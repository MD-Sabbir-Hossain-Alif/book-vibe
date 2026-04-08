import React from "react";
import { Link } from "react-router";

const Error = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
            <div className="text-center max-w-xl">
                <h1 className="text-8xl font-bold text-primary">404</h1>

                <h2 className="mt-4 text-3xl font-semibold">Page not found</h2>

                <p className="mt-2 text-base-content/70">
                    Sorry, the page you’re looking for doesn’t exist or has been
                    moved.
                </p>

                <div className="mt-6 flex justify-center gap-3">
                    <button
                        onClick={() => window.history.back()}
                        className="btn btn-outline color-2 hover:bg-[#59C6D2] hover:text-white!"
                    >
                        Go Back
                    </button>

                    <Link
                        to="/"
                        className="btn btn-outline color-1 hover:bg-[#23BE0A] hover:text-white!"
                    >
                        Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Error;
