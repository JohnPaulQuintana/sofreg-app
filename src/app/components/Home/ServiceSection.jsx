import { motion } from "framer-motion";
import { useState } from "react";
import testImage from "../../../assets/services/test.png";
import { Link } from "react-router-dom";
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
        {/* Motion div with animation */}
        <Link
          to="/services/design"
          state={{
            serviceType: "Design",
            description: "We have Designed for over 260 projects.",
          }}
        >
          <motion.div
            variants={inViewChild}
            initial="initial"
            animate="animate"
            className="h-[400px] bg-color-sky hover:cursor-pointer rounded-sm pt-5 relative overflow-hidden transition ease-in shadow-2xl  hover:scale-105"
          >
            <div className="flex flex-col gap-2 items-center justify-center">
              <h1 className="text-color-dark font-bold text-3xl">Design</h1>
              <p className="text-semibold text-color-dark px-2 text-center">
                Handcraft the user experience on design
              </p>
              <div className="flex gap-3 text-sm">
                <span>UX-UI</span>
                <span>•</span>
                <span>WEB</span>
                <span>•</span>
                <span>Mobile</span>
              </div>

              <div className="w-full h-[250px] absolute bottom-0">
                <img className="h-full" src={testImage} alt="" />
              </div>
            </div>
          </motion.div>
        </Link>
        {/* Motion div with animation */}
        <Link
          to="/services/web"
          state={{
            serviceType: "Web Solutions",
            description:
              "We have designed Web Solutions for over 260 projects.",
          }}
        >
          <motion.div
            variants={inViewChild}
            initial="initial"
            animate="animate"
            className="h-[400px] bg-color-magenta hover:cursor-pointer shadow-2xl rounded-sm pt-5 relative overflow-hidden transition ease-in delay-75 hover:scale-105"
          >
            <div className="flex flex-col gap-2 items-center justify-center">
              <h1 className="text-color-dark font-bold text-3xl">
                Web Solutions
              </h1>
              <p className="text-semibold text-color-dark px-2 text-center">
                Handcraft the user experience on design
              </p>
              <div className="flex gap-3 text-sm">
                <span>UX-UI</span>
                <span>•</span>
                <span>WEB</span>
                <span>•</span>
                <span>Mobile</span>
              </div>

              <div className="w-full h-[250px] shadow-2xl absolute bottom-0">
                <img className="h-full" src={testImage} alt="" />
              </div>
            </div>
          </motion.div>
        </Link>
        {/* Motion div with animation */}
        <Link
          to="/services/video"
          state={{
            serviceType: "Video Production",
            description:
              "We have designed Video Production for over 260 projects.",
          }}
        >
          <motion.div
            variants={inViewChild}
            initial="initial"
            animate="animate"
            className="h-[400px] bg-color-yellow hover:cursor-pointer shadow rounded-sm pt-5 relative overflow-hidden transition ease-in  hover:scale-105"
          >
            <div className="flex flex-col gap-2 items-center justify-center">
              <h1 className="text-color-dark font-bold text-3xl">
                Video Production
              </h1>
              <p className="text-semibold text-color-dark px-2 text-center">
                Handcraft the user experience on design
              </p>
              <div className="flex gap-3 text-sm">
                <span>UX-UI</span>
                <span>•</span>
                <span>WEB</span>
                <span>•</span>
                <span>Mobile</span>
              </div>

              <div className="w-full h-[250px] absolute bottom-0">
                <img className="h-full" src={testImage} alt="" />
              </div>
            </div>
          </motion.div>
        </Link>
      </div>
    </motion.div>
  );
};

export default ServiceSection;
