import React from "react";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";
import ProgressScrollButton from "../components/ProgressScrollButton";
import AboutHeader from "../components/AboutHeader";
import PageIntro from "../components/PageIntro";
import PageIntroModern from "../components/PageIntroModern";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import FooterDetailed from "../components/FooterDetailed";
const About = () => {
    return (
        <div className="">
            {/* Loader */}
            <Loader />

            {/* Cursor */}
            <div className="cursor"></div>

            {/* Navbar */}
            <Navbar />

            {/* Sidebar */}
            <Sidebar />
            {/* progess scroll */}
            <ProgressScrollButton />

            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <main className="main-bg">
                        {/* header */}
                        <AboutHeader />

                        {/* page intro */}
                        <PageIntro />

                        {/* Page Intro Modern */}
                        <PageIntroModern />


                    </main>

                    <FooterDetailed />
                </div>
            </div>
        </div>
    )
}

export default About;