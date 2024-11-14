// import React from 'react'
// import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Logo from "../components/Home/Logo";
import HeaderText from "../components/Home/TextSection";
import ClientSection from "../components/Home/ClientSection";
import DesignSection from "../components/Home/DesignSection";
import WebSection from "../components/Home/WebSection";
import VideoSection from "../components/Home/VideoSection";
import ServiceSection from "../components/Home/ServiceSection";
import MapSection from "../components/Home/MapSection";
import FounderSection from "../components/Home/FounderSection";
import ClientSaySection from "../components/Home/ClientSaySection";
import FrequentlySection from "../components/Home/FrequentlySection";
import QuotationSection from "../components/QuotationSection";
import FooterSection from "../components/footerSection";
import Navbar from "../components/Navbar";
// const triangleVariant = {
//   initial: {
//     opacity: 1,
//   },
//   animate: {},
// };
const Home = () => {
  // const { scrollY } = useScroll(); // Use scroll position tracking from framer-motion
  // const [targetPosition, setTargetPosition] = useState({ x: 0, y: 0 }); // Store x and y position of the target element
  // const [hasReachedTarget, setHasReachedTarget] = useState(false); // Flag to stop triangle movement once it reaches target

  // Create a spring-based animation from scrollYProgress
  // const smoothScroll = useSpring(scrollY, {
  //   stiffness: 6,
  //   damping: 6,
  //   mass: 2,
  //   transition: {
  //     delay: 10,
  //     duration: 1
  //   }
  // });

  // Map scroll progress to a height percentage for the fill
  // const fillHeight = useTransform(smoothScroll, [0, 5000], ["0%", "100%"])

  // console.log('scroll',fillHeight)
  // Get target element's position when the component mounts
  // useEffect(() => {
  //   const targetElement = document.getElementById("targetElement");
  //   if (targetElement) {
  //     const rect = targetElement.getBoundingClientRect();
  //     setTargetPosition({
  //       x: Math.floor(rect.left + window.scrollX), // Position relative to the viewport
  //       y: Math.floor(rect.top + window.scrollY), // Position relative to the viewport
  //     });
  //   }
  // }, []); // Only run once on mount

  // Track the triangle's position based on scroll
  // const y = useTransform(scrollY, [0, targetPosition.y], [0, targetPosition.y]); // Y-axis transformation
  // const x = useTransform(scrollY, [0, targetPosition.x], [0, targetPosition.x]); // X-axis transformation
  // console.log(x,y)
  // const fillHeight = useTransform(smoothScroll, [0, 1000], ["0%", "100%"])
  // Check if the scroll has reached or surpassed the target position
  // useEffect(() => {
  //   const targetElement = document.getElementById("targetElement");
  //   // Log scroll position for debugging
  //   // console.log(scrollY.get());
    
  //   scrollY.onChange((latestScrollYProgress) => {
  //     // Calculate the percentage of scroll progress
  //     const scrollProgress = Math.min(1, latestScrollYProgress / 1000); // Adjust 1000 to your page's total scroll range

  //     console.log(latestScrollYProgress, targetPosition.y, scrollProgress);

  //      // Map scroll progress to a height percentage for the fill
  //     if (latestScrollYProgress >= 360 && latestScrollYProgress <= 370) {
  //       console.log("lets animate some color");
  //       setHasReachedTarget(true); // Stop the movement once the target is reached
  //     }
  //     // setIsAtTop(latestScrollYProgress >= 0.55);
  //     // // Stop the movement once the triangle reaches the target position
  //     // if (scrollY.get() >= targetPosition.y && !hasReachedTarget) {
  //     //   // console.log("Triangle has reached the target!");

  //     // }
  //   });
  // }, [scrollY, targetPosition, hasReachedTarget]); // Runs every time scroll position changes


  return (
    <div>
       <Navbar/>
       <div className='p-10 md:p-0'></div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-4 items-center justify-center p-6 md:p-12 max-w-5xl mx-auto">
        {/* Logo Section */}
        <div className="flex items-center justify-center p-8 md:p-2 md:h-screen">
          <Logo />
        </div>
        {/* Text Section */}
        <div className="hidden md:block">
          <HeaderText />
        </div>
      </div>
      <div className="relative border-l-8 border-color-dark grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-4 items-center justify-center p-6 md:p-12 max-w-5xl mx-auto">
        {/* Inner fill div that animates from top to bottom */}
        {/* <motion.div
          className="" // White fill color
          style={{
            height: fillHeight,
            backgroundColor: "white",  // Color of the filling effect
            position: "absolute",
            left: 0,
            top: 0,
            width: "8px",  // Border width
            zIndex: -1,    // Position behind content
          }}
        ></motion.div> */}
        {/* border animation */}
        {/* <div className="border"> */}
        {/* {circles.map((_, index) => (
            <span key={index} className="fixed bg-white top-[100px] w-[50px] h-[25px] rounded-xl" id={index}></span>
          ))} */}
        {/* </div> */}
        {/* <div className="border-l-8 h-screen top-[550px] border-white fixed"></div> */}
        {/* <motion.svg
      // targetRef={targetRef}
      style={{
        x,  // Apply dynamic x translation
        y,  // Apply dynamic y translation
      }}

      animate={{
        opacity: hasReachedTarget ? 0 : 1, // If hasReachedTarget is true, opacity will be 1, otherwise 0
      }}
        className="size-14 fixed top-0 z-10 text-yellow-400"
        width="100"
        height="87"
        viewBox="0 0 100 87"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M50 0 L100 87 H0 Z" fill="currentColor" />
      </motion.svg> */}
        <div className="sm:block md:hidden relative">
          {/* <span className="opacity-10 bg-white w-[30px] h-[30px] absolute rounded-2xl top-8 -left-6"></span> */}
          <HeaderText />
        </div>
        {/* Client section */}
        <div className="p-5 col-span-1 mt-10 md:mb-20 md:col-span-2 relative">
          {/* <span className="opacity-10 bg-white w-[30px] h-[30px] absolute rounded-2xl top-8 -left-6"></span> */}
          <ClientSection />
        </div>

        {/* Heading 2 */}
        <div className="text-xl md:text-3xl p-5 ms-2 mt-20 md:col-span-2 mb-10">
          <p className="text-white">
            We are a Philippine-based creative agency that combines design and
            technology, specializing in{" "}
            <span className="font-bold text-color-sky">Graphic design</span>,{" "}
            <span className="font-bold text-color-magenta">Website development</span>, and{" "}
            <span className="font-bold text-color-yellow">Video editing</span>.
          </p>
        </div>

        {/* Card Section */}
        <div className="content md:col-span-2 p-5 h-48 md:h-56 rounded-md bg-gray-500 mt-15 relative flex items-center justify-center mb-20">
          {/* <h2 className="absolute text-5xl text-white">SVG Animated</h2> */}
        </div>

        {/* Design Section */}
        <div className="md:col-span-2 w-full">
          {/* {!hideDesignSection && ( */}
          <div className="h-fit">
            <DesignSection />
            <WebSection />
            <VideoSection />
            {/* <DesignSection /> */}
          </div>

          {/* )} */}
        </div>

        {/* Service Section */}
        <div
          className="md:col-span-2 w-full relative z-10 mb-20 -mt-10"
          ref={{}}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <ServiceSection />
          </motion.div>
        </div>

        {/* Map Section */}
        <div
          className="md:col-span-2 w-full h-full relative z-10 mb-20"
          ref={{}}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <MapSection />
          </motion.div>
        </div>
        {/* Founder Section */}
        <div
          className="md:col-span-2 w-full h-full relative z-10 mb-20"
          ref={{}}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <FounderSection />
          </motion.div>
        </div>
        <div className="p-14"></div>

        {/* Client Say Section */}
        <div className="md:col-span-2 w-full relative z-10 mb-20" ref={{}}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <ClientSaySection />
          </motion.div>
        </div>
        {/* Frequently Section */}
        <div className="md:col-span-2 w-full relative z-10 mb-20" ref={{}}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <FrequentlySection />
          </motion.div>
        </div>
        {/* Frequently Section */}
        <div className="md:col-span-2 w-full relative z-10 mb-20" ref={{}}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <QuotationSection />
          </motion.div>
        </div>

        {/* <div className="h-screen"></div> */}
      </div>
      {/* Footer Section */}
      <div className="md:col-span-2 w-full relative z-10" ref={{}}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <FooterSection />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
