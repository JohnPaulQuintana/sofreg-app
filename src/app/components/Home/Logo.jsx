import { motion, useScroll, useTransform } from "framer-motion";
import hero1 from "../../../assets/hero1.png"
import hero2 from "../../../assets/hero2.png"
import hero3 from "../../../assets/hero3.png"
// import { useState, useEffect } from "react";

// Function to generate random positions within a range
// const getRandomPosition = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const logoVariants = {
  hidden: {
    opacity: 0,
    width: '100%',
  },
  visible: {
    opacity: 1,
    width: '100%', // Adjust as needed for the final size
    transition: { duration: 1, delay: 1 },
  }
};

const circleVariants = {
  initial: {
    scale: 0.5,    // Start at a smaller scale
  },
  animate: {
    scale: 1,      // Grow to full size
    rotate: 360,   // Continuous rotation
    transition: {
      scale: {
        duration: 1.5,        // Time to grow to full size
        ease: "easeOut",
      },
      rotate: {
        repeat: Infinity,     // Keep rotating infinitely
        duration: 10,         // Speed of rotation
        ease: "linear",
      }
    }
  }
};

const shakeVariants = {
  animate: {
    scale: [1, 0.95, 1],  // Shake effect using scale
    transition: {
      scale: {
        repeat: Infinity,  // Repeat infinitely
        repeatType: "loop", // Loop the animation
        duration: 1,        // Time to complete one shake cycle
        ease: "easeInOut",  // Smooth easing
        delay: 1.5,         // Delay before starting the shake
      },
    },
  },
};
const shakeVariants2 = {
  animate: {
    scale: [1, 0.95, 1],  // Shake effect using scale
    transition: {
      scale: {
        repeat: Infinity,  // Repeat infinitely
        repeatType: "loop", // Loop the animation
        duration: 1,        // Time to complete one shake cycle
        ease: "easeInOut",  // Smooth easing
        delay: 2,         // Delay before starting the shake
      },
    },
  },
};
const shakeVariants3 = {
  animate: {
    scale: [1, 0.95, 1],  // Shake effect using scale
    transition: {
      scale: {
        repeat: Infinity,  // Repeat infinitely
        repeatType: "loop", // Loop the animation
        duration: 1,        // Time to complete one shake cycle
        ease: "easeInOut",  // Smooth easing
        delay: 3.5,         // Delay before starting the shake
      },
    },
  },
};
// // Variants for the smaller circles (continuous rotation)
// const smallCircleVariants = {
//   initial: {
//     scale: 0.5,
//     opacity: 0,
//   },
//   visible: {
//     scale: 1,
//     opacity: 1,
//     rotate: 360,
//     transition: {
//       scale: { duration: 1, ease: "easeOut" },
//       opacity: { duration: 1 },
//       rotate: {
//         repeat: Infinity,
//         duration: 10,
//         ease: "linear",
//       },
//     },
//   },
// };

const Logo = () => {
  const { scrollY } = useScroll();

  // Large circle transformation based on scroll
  const largeCircleOpacity = useTransform(scrollY, [0, 200], [1, 0]);
  const largeCircleScale = useTransform(scrollY, [0, 200], [1, 0.5]);


 
  return (
    
    
    // Outer container for positioning
    <div className="flex items-center justify-center w-64 md:w-72 h-64 md:h-72 relative">
    
      <motion.div
        className="absolute w-full h-full border-2 shadow-2xl border-dashed border-gray-300 rounded-full"
        style={{
          opacity: largeCircleOpacity,
          scale: largeCircleScale,
        }}
        variants={circleVariants}
        initial="initial"
        animate="animate"
        
      />


      {/* Fixed content in the center */}
      <motion.div
        variants={logoVariants}
        initial="hidden"
        animate="visible"
        style={{
          opacity: largeCircleOpacity,
          scale: largeCircleScale,
          
        }}
        className="p-12 flex items-center justify-center absolute -top-24"
      >
        <div className="">
          <motion.img 
          variants={shakeVariants}
          animate="animate"
          className="" src={hero1} alt="" srcset="" />
        </div>
      </motion.div>
      <motion.div
        variants={logoVariants}
        initial="hidden"
        animate="visible"
        style={{
          opacity: largeCircleOpacity,
          scale: largeCircleScale,
        }}
        className="p-12 flex items-center justify-center absolute -left-32"
      >
        <div className="">
          <motion.img 
          variants={shakeVariants2}
          animate="animate"
          className="" src={hero2} alt="" srcset="" />
        </div>
      </motion.div>
      <motion.div
        variants={logoVariants}
        initial="hidden"
        animate="visible"
        style={{
          opacity: largeCircleOpacity,
          scale: largeCircleScale,
        }}
        className="p-12 flex items-center justify-center absolute -bottom-24"
      >
        <div className="">
          <motion.img 
          variants={shakeVariants3}
          animate="animate"
          className="" src={hero3} alt="" srcset="" />
        </div>
      </motion.div>
    </div>
  );
};

export default Logo;
