import { motion, useScroll } from "framer-motion";
import { useState, useEffect, useRef } from "react";

import hero1 from "../../../assets/hero1.png";

const logoVariants = {
  hidden: { opacity: 0, width: "100%" },
  visible: { opacity: 1, width: "100%", transition: { duration: 1 } },
};

const circleVariants = {
  initial: { scale: 0.5 },
  animate: {
    scale: 1,
    rotate: 360,
    transition: {
      scale: { duration: 1.5, ease: "easeOut" },
      rotate: { repeat: Infinity, duration: 10, ease: "linear" },
    },
  },
};

const TextVariant = {
  hidden: { opacity: 0, x: "-100vw" }, // Initial state (completely hidden with a horizontal offset)
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      opacity: { duration: 1 }, // Control the duration of the opacity change
      x: { type: "spring", stiffness: 100, damping: 30 }, // Control the horizontal movement with a spring
    },
  }, // Final state (fully visible and positioned at x: 0)
};

const containerWidthVariant = {
  initial: { height: "12vh", overflow: "hidden" },
  animate: { height: "100%" },
};

const circleVariantPosition = {
  smaller: {
    opacity: 0,
  },
  initial: { opacity: 0, position: "fixed", top: "200px", right: "100px" },
  animate: {
    opacity: 1,
    scale: 1,
    position: "fixed",
    top: "200px",
    right: "100px",
    transition: { duration: 1, delay: 0.5 },
  },
};

const inViewContainer = {
  outview: {
    opacity: 0,
  },
  inview: {
    opacity: 1,
    transition: { duration: 1, delay: 0.2 },
  },
};
const useIsLargeScreen = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => setIsLargeScreen(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isLargeScreen;
};

const DesignSection = () => {
  // console.log(props)
  const [isAtTop, setIsAtTop] = useState(false);
  const divRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: divRef,
    offset: ["start end", "start start"],
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((latestScrollYProgress) => {
      //   console.log(latestScrollYProgress)
      setIsAtTop(latestScrollYProgress >= 0.55);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  const isLargeScreen = useIsLargeScreen();

  // Determine the animation variant based on conditions
  const determineAnimation = () => {
    if (!isAtTop) return "initial";
    return isLargeScreen ? "animate" : "smaller";
  };
  const sections = [
    {
      title: "Branding and Identity Design",
      desc: "Creating logos, color schemes, and visual identities for companies and products.",
    },
    {
      title: "Print Design",
      desc: "Designing materials like brochures, business cards, posters, and packaging.",
    },
    {
      title: "UI/UX Design",
      desc: "Focusing on user interface and user experience design for digital products.",
    },
    {
      title: "Motion Graphics",
      desc: "Creating animated graphics for videos, presentations, and digital media.",
    },
    {
      title: "Illustration",
      desc: "Producing custom artwork and illustrations for various applications.",
    },
    {
      title: "Advertising Design",
      desc: "Designing promotional materials for print and digital advertising campaigns.",
    },
    {
      title: "Social Media Graphics",
      desc: "Creating engaging visuals for social media platforms and campaigns.",
    },
    {
      title: "Infographic Design",
      desc: "Designing visual representations of data and information for easy comprehension.",
    },
    {
      title: "Environmental Design",
      desc: "Designing graphics for physical spaces, such as signage and exhibition displays.",
    },
  ];

  return (
    <div>
      <motion.div
        variants={inViewContainer}
        initial="outview"
        whileInView="inview"
        className="grid grid-cols-1 md:grid-cols-2 mb-32"
      >
        <motion.div
          ref={divRef}
          variants={containerWidthVariant}
          initial="initial"
          animate={isAtTop ? "animate" : "initial"}
        >
          <div className="flex items-center gap-5">
            <motion.div
              variants={circleVariants}
              initial="initial"
              animate="animate"
              className="border border-dashed border-cobg-color-sky rounded-full flex items-center justify-center relative w-[60px] h-[50px]"
            >
              <div className="bg-color-sky p-3 rounded-xl"></div>

            </motion.div>
            <motion.h1 className="text-5xl md:text-6xl font-bold text-color-sky mb-3 bg-color-dark w-full">
              Design
            </motion.h1>
          </div>
          
          {sections.map((section, index) => {
            // console.log(isLastSection)
            return (
              <motion.div
                key={index}
                variants={TextVariant}
                initial="hidden"
                whileInView="inview"
                animate={isAtTop ? "visible" : "hidden"}
                transition={{ duration: 1.5, delay: 0.5 * index }}
                className="md:text-left space-y-0 mb-2 py-2"
              >
                <h1 className="text-2xl font-bold text-white">
                  {section.title}
                </h1>
                <p className="text-slate-100 mt-4 leading-relaxed md:text-xl">
                  {section.desc}
                </p>
              </motion.div>
            );
          })}
          


        </motion.div>

        <motion.div
          variants={circleVariantPosition}
          initial="initial"
          animate={determineAnimation}
          className="flex justify-center"
        >
          <div className="flex items-center justify-center w-64 md:w-72 h-64 md:h-72 relative">
            {/* Animated dashed border */}
            <motion.div
              className="absolute w-full h-full border-2 border-dashed border-color-sky rounded-full"
              variants={circleVariants}
              initial="initial"
              animate="animate"
            />

            {/* Fixed content in the center */}
            <motion.div
              variants={logoVariants}
              initial="hidden"
              animate="visible"
              className="p-12 flex items-center justify-center"
            >
              <div className="text-xl font-semibold text-white">
                <img className="" src={hero1} alt="" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default DesignSection;
