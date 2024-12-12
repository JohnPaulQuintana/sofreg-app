import React from "react";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";

const Career = () => {
    return (
        <div className="startup-one">
            {/* Loader */}
            <Loader />

            {/* Cursor */}
            <div className="cursor"></div>

            {/* Navbar */}
            <Navbar />
        </div>
    )
}

export default Career;