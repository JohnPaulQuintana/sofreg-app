import React from "react";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";

const Contact = () => {
    return (
        <div className="startup-one">
            {/* Loader */}
            <Loader />

            {/* Cursor */}
            <div className="cursor"></div>

            {/* navbar */}
            <Navbar />
        </div>
    )
}

export default Contact;