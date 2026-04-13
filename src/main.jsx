import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router/dom";
import router from "./components/routes/Router";
import BooksProvider from "./components/Context/BooksProvider.jsx";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <BooksProvider>
            <RouterProvider router={router}></RouterProvider>
            <ToastContainer />
        </BooksProvider>
    </StrictMode>,
);
