import React from "react";
import { motion } from "framer-motion";
import { useModal } from "./Modal";

const GlobalModal = () => {
  const { isOpen, closeModal } = useModal();

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={closeModal} // Close modal on backdrop click
    >
      <motion.div
        initial={{
          x: "100%", // Start from the right of the screen
          y: "100%", // Start from the bottom of the screen
          scale: 0.5, // Start small
          opacity: 0, // Start transparent
        }}
        animate={{
          x: 0, // Animate to the center horizontally
          y: 0, // Animate to the center vertically
          scale: 1, // Full size
          opacity: 1, // Fully visible
          transition: {
            type: "spring",
            stiffness: 350,
            damping: 25,
            duration: 0.6,
          },
        }}
        className="bg-slate-400 flex flex-col items-center justify-center p-6 shadow-lg w-full max-w-lg sm:w-96 sm:max-w-full md:w-[50%] lg:w-[50%] relative"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
      >
        <h2 className="text-xl font-bold mb-4 text-color-yellow">Design a Quote</h2>
        <h2 className="text-xl font-bold mb-4">What services would you like to opt?</h2>
        {/* <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Name:</label>
            <input type="text" className="w-full p-2 border rounded" required />
          </div>
          <div>
            <label className="block text-sm font-medium">Email:</label>
            <input
              type="email"
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Message:</label>
            <textarea className="w-full p-2 border rounded" required />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Submit
          </button>
        </form> */}
        <button
          onClick={closeModal} // Trigger immediate close on button click
          className="absolute top-2 right-2 text-red-500 font-bold"
        >
          ✕
        </button>
      </motion.div>
    </motion.div>
  );
};

export default GlobalModal;
