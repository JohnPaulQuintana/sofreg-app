import { motion } from "framer-motion";
import { useState } from "react";

// Parent animation variant (for example, fade in)
const inViewContainer = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1,
      delay: 0.2,
      staggerChildren: 0.3, // Stagger the children with a 0.3s delay
    },
  },
};

// Child animation variant (staggered opacity transition)
const inViewChild = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 1, // Duration for the opacity change
    },
  },
};

const ServiceSection = () => {
  const [animationComplete, setAnimationComplete] = useState(false);

  return (
    <motion.div
      variants={inViewContainer}
      initial="initial"
      whileInView="animate"
      viewport={{ once: false, amount: 0.5 }}
      onAnimationComplete={() => setAnimationComplete(true)} // Set state when parent animation completes
      className=""
    >
      {/* Parent content */}
      <div className="text-white text-2xl mb-14">
        <h1>
          As a full-stack team specializing in Graphic design, Website
          Development, and Video editing, we collaborate with clients to
          streamline, elevate, and revolutionize their creative projects.
        </h1>
      </div>

      {/* Conditional rendering of child content based on animation completion */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        {animationComplete && (
          <>
            {/* Motion div with animation */}
            <motion.div
              variants={inViewChild}
              initial="initial"
              animate="animate"
              className="h-[400px] bg-gray-400 rounded-md"
            ></motion.div>

            {/* Other static divs */}
            <div className="h-[400px] bg-gray-400 rounded-md"></div>
            <div className="h-[400px] bg-gray-400 rounded-md"></div>
          </>
        )}
      </div>
    </motion.div>
  );
};

export default ServiceSection;
