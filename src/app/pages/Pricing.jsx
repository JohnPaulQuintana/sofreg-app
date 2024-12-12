import React from "react";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";

const Pricing = () => {
    return (
        <div className="startup-one">
            {/* Loader */}
            <Loader />

            {/* Cursor */}
            <div className="cursor"></div>

            <Navbar />
        </div>
    )
}

export default Pricing;