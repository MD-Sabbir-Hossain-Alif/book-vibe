import React from "react";
import { Outlet } from "react-router";
import Navbar from "./Navbar/Navbar";
import Container from "../Container/Container";

const Layout = () => {
    return (
        <Container>
            <Navbar />
            <Outlet />
        </Container>
    );
};

export default Layout;
