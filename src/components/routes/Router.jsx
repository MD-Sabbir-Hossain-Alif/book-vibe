import { createBrowserRouter } from "react-router";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Books from "../Pages/Books/Books";
import Error from "../Pages/Error/Error";

const router = createBrowserRouter([
    {
        path: "/",
        Component: Layout,
        children: [
            {
                index: true,
                Component: Home,
            },
            {
                path: "/books",
                Component: Books,
            },
        ],
        errorElement: <Error></Error>,
    },
]);

export default router;
