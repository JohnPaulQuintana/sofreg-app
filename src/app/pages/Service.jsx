import React, {useState} from "react";
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
import Modal from "../components/ImageViewer"
import { useLocation } from "react-router-dom";

const Services = () => {

    const location = useLocation();
    const { state } = location.state || {}; // Access the prop
    // console.log(state)

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    // Function to open the modal with the selected image
    const openModal = (image) => {
        setSelectedImage(image);
        setIsModalVisible(true);
    };

    // Function to close the modal
    const closeModal = () => {
        setIsModalVisible(false);
        setSelectedImage(null);
    };

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
                    <WorkSection openModal={openModal}/>

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
            {/* Modal Component */}
            <Modal isVisible={isModalVisible} imageSrc={selectedImage} onClose={closeModal} />

        </div>
    )
}

export default Services;