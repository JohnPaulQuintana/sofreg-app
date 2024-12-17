import React from "react";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";
import WorkHeader from "../components/WorkHeader";
import WorkSection from "../components/WorkSection";
import Footer from "../components/Footer";
import ProgressScrollButton from "../components/ProgressScrollButton";
import ImageScale from "../components/ImageScale";
import Testimonials from "../components/Testimonial";
import Faqs from "../components/Faqs";
import ContactSection from "../components/ContactSection";
import Sidebar from "../components/Sidebar";
import ContactForm from "../components/ContactForm";
import FooterDetailed from "../components/FooterDetailed";

const Services = () => {
    return (
        <div className="smooth-wrapper">

            {/* Loader */}
            <Loader />

            {/* Cursor */}
            <div className="cursor"></div>

            <ProgressScrollButton />
            {/* Navbar */}
            <Navbar />

            {/* sidebar */}
            <Sidebar />
            <div id="smooth-content">

                <main className="main-bg">
                    {/* header */}
                    <WorkHeader />

                    {/* Portfolio */}
                    <WorkSection />

                    {/* Image Scale */}
                    <ImageScale />

                    {/* Testimonials */}
                    <Testimonials />

                    {/* Faqs */}
                    <Faqs />

                    {/* COntact */}
                    {/* <ContactSection /> */}
                    <ContactForm />
                </main>

            <FooterDetailed />
            <Footer />
            </div>


        </div>
    )
}

export default Services;