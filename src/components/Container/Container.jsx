import React from "react";

const Container = ({ children }) => {
    return (
        <div className="max-w-362 w-full px-1 mx-auto">
            <div className="max-w-300 w-full mx-auto">{children}</div>
        </div>
    );
};

export default Container;
