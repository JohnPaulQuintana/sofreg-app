import client from "../../../assets/default-client.jpg";
import quote from "../../../assets/quote.svg";
import { FaStar } from "react-icons/fa";
import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";
const containerVariant = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1,
      delay: 0.2,
    },
  },
};

const testimonials = [
  {
    name: "Amit Singh",
    title: "C.E.O - Investica",
    feedback:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae veniam nesciunt ab repellendus aut esse quasi vitae.",
  },
  {
    name: "Jane Doe",
    title: "Manager - Alpha Corp",
    feedback:
      "Repellendus quasi cumque sapiente animi doloribus rem laborum facilis! Placeat odio est nulla.",
  },
  {
    name: "John Smith",
    title: "Director - Beta Ltd",
    feedback:
      "Doloribus aut fugiat quidem, molestiae labore eos. Vero, tempora maxime?",
  },
  {
    name: "Emily Johnson",
    title: "Head of Marketing - Gamma Inc.",
    feedback:
      "Aliquam sint nihil fugiat voluptate distinctio atque autem ipsa!",
  },
  {
    name: "Michael Brown",
    title: "CTO - Delta Solutions",
    feedback:
      "Quasi doloremque culpa, aut itaque beatae. Consequuntur nemo reiciendis sunt.",
  },
];

const ClientSaySection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Helper function to reset the interval
  const resetInterval = useCallback((intervalId) => {
    clearInterval(intervalId);
    startAutoPlay();
  }, []);

  // Function to start auto-playing the slides
  const startAutoPlay = () => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % testimonials.length);
    }, 6000);
    return intervalId;
  };

  useEffect(() => {
    let intervalId = startAutoPlay();

    return () => clearInterval(intervalId); // Clear interval on component unmount
  }, []);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
    resetInterval();
  };

  return (
    <motion.div
      variants={containerVariant}
      initial="initial"
      whileInView="animate" // Animate when in view
      viewport={{ once: false, amount: 0.5 }} // Trigger when 50% of the element is in view
      className="md:p-8 md:py-10 rounded-md relative bg-gray-400"
    >
      <div className="relative w-full overflow-hidden">
        <div
          className="flex transition-all duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          <AnimatePresence>
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-gray-400 p-4 py-10 rounded-lg flex w-full flex-shrink-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-4 gap-3 items-center">
                  <div className="flex flex-col gap-2 items-center">
                    <img
                      className="w-[100px] h-[100px] rounded-full"
                      src={client}
                      alt="Client"
                    />
                    <h1 className="text-xl text-center font-bold tracking-wider">
                      {testimonial.name}
                    </h1>
                    <span className="font-semibold text-center">
                      {testimonial.title}
                    </span>
                  </div>
                  <div className="col-span-3 ps-5 p-2">
                    <h1 className="mb-4 font-bold text-2xl ps-10">
                      What Clients Say
                    </h1>
                    <div className="flex items-center gap-4 mb-2">
                      <FaQuoteLeft className="text-color-sky size-8"/>
                      <span className="flex gap-3 text-gray-800">
                        <FaStar className="text-color-sky"/>
                        <FaStar className="text-color-sky"/>
                        <FaStar className="text-color-sky"/>
                        <FaStar className="text-color-sky"/>
                        <FaStar className="text-color-sky"/>
                      </span>
                    </div>
                    <p className="text-2xl ps-10 w-full">
                      {testimonial.feedback}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Dot indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex justify-center gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentSlide ? "bg-gray-800" : "bg-gray-400"
              }`}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ClientSaySection;
