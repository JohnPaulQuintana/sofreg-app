import React from "react"
import { useLocation } from "react-router-dom";
import Loader from "../components/Loader"
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
import Header from "../components/Header"
import Services from "../components/Services"
import AboutSection from "../components/AboutSection"
// import "/assets/css/satoshi.css"
// import "/assets/css/plugins.css"
// import "/assets/css/style.css"
import ProgressScrollButton from "../components/ProgressScrollButton";
import MarqueeSection from "../components/Marquee"
import PortfolioTabGraphics from "../components/PortfolioTabGraphics"
import ImageScale from "../components/ImageScale"
import AboutSectionFooter from "../components/Team"
import Footer from "../components/Footer"
import PortfolioTabWeb from "../components/PortfolioTabWeb"
import PortfolioTabVideo from "../components/PortfolioTabVideo"
import Testimonials from "../components/Testimonial"
import Faqs from "../components/Faqs"
import ContactSection from "../components/ContactSection"
import ContactForm from "../components/ContactForm";
import FooterDetailed from "../components/FooterDetailed";

const Home = () => {
  return (
    <div className="startup-one">
      {/* Loader */}
      <Loader />

      {/* Cursor */}
      <div className="cursor"></div>

      {/* Progress Scroll Button */}
      <ProgressScrollButton />

      <div id="smooth-wrapper">

        {/* Navbar */}
        <Navbar />
        {/* End of Navbar */}

        {/* Sidebar */}
        <Sidebar />
        {/* End of Sidebar */}

        <div id="smooth-content">

            <main className="main-bg">

              {/* Header */}
              <Header />

              {/* Services */}
              <Services />

              {/* About */}
              <AboutSection />

              {/* Marquee */}
              <MarqueeSection />

              {/* Graphics */}
              <PortfolioTabGraphics />

              {/* Web Solutions */}
              <PortfolioTabWeb />

              {/* Video Production */}
              <PortfolioTabVideo />
              {/* image scale */}
              <ImageScale />

              {/* about footer section */}
              <AboutSectionFooter />

              {/* Testimonials */}
              <Testimonials />

              {/* Frequently ask */}
              <Faqs />

              {/* Contact Section */}
              {/* <ContactSection /> */}
              <ContactForm />
            </main>

          {/* footer */}
          <FooterDetailed />
        </div>
      </div>
    </div>
  );
};

export default Home;
