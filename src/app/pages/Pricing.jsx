import React from "react";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import PriceHeader from "../components/PriceHeader";
import GraphicPrice from "../components/GraphicPrice";
import Footer from "../components/Footer";
import FooterDetailed from "../components/FooterDetailed";
import ContactForm from "../components/ContactForm";
const Pricing = () => {
    return (
        <div className="startup-one">
            {/* Loader */}
            <Loader />

            {/* Cursor */}
            <div className="cursor"></div>

            <Navbar />

            <Sidebar />
            
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <main className="main-bg">
                        <PriceHeader />

                        {/* graphic */}
                        <GraphicPrice />

                        <ContactForm />
                    </main>

                    {/* footer */}
                    <FooterDetailed />
                </div>
            </div>
        </div>
    )
}

export default Pricing;