import { createBrowserRouter } from "react-router";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Books from "../Pages/Books/Books";
import Error from "../Pages/Error/Error";
import BookDetails from "../Pages/Home/BookDetails/BookDetails";

const router = createBrowserRouter([
    {
        path: "/",
        Component: Layout,
        hydrateFallbackElement: (
            <div className="flex justify-between items-center max-w-full max-h-screen">
                Loading app...
            </div>
        ),
        children: [
            {
                index: true,
                Component: Home,
            },
            {
                path: "books",
                Component: Books,
            },
            {
                path: "bookdetails/:bookId",
                Component: BookDetails,
                loader: () => fetch("/booksData.json"),
                fallbackElement: <div>Loading...</div>,
            },
        ],
        errorElement: <Error></Error>,
    },
]);

export default router;
