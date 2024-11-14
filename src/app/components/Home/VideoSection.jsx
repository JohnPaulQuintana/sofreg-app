import { motion, useScroll } from "framer-motion";
import { useState, useEffect, useRef } from "react";

import hero3 from "../../../assets/gif/Video.gif";
import LazyLoadGif from "./GIF/Gifimage";
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
  initial: { height: "20vh", overflow: "hidden" },
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

const VideoSection = () => {
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
      title: "Long-Form Editing",
      desc: "Involves editing longer videos, such as feature films or web series, requiring in-depth narrative development.",
    },
    {
      title: "Short-Form Editing",
      desc: "Focuses on creating short videos, such as ads, social media clips, or highlight reels, emphasizing concise storytelling.",
    },
    {
      title: "Corporate Video Editing",
      desc: "Tailors video content for corporate communications, training, and promotional materials, often with a professional tone.",
    },
    {
      title: "Documentary Editing",
      desc: "Involves editing footage for documentaries, requiring a focus on storytelling and factual accuracy.",
    },
    {
      title: "Color Correction and Grading",
      desc: "Enhances the visual appeal of video by adjusting colors, contrast, and brightness to create a specific mood or style.",
    },
    {
      title: "Film Editing",
      desc: "Focuses on editing footage shot on film, involving specific techniques and tools related to film media.",
    },
    {
      title: "Social Media Reels",
      desc: "Short, engaging videos designed for platforms like Instagram, TikTok, and Facebook, often focusing on trends or storytelling.",
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
              className="border border-dashed flex justify-center items-center rounded-full relative p-2"
            >

<div className="bg-color-yellow p-3 rounded-xl"></div>
            </motion.div>
            <motion.h1 className="text-5xl md:text-6xl font-bold text-color-yellow mb-3 bg-color-dark w-full">
            Video Production
            </motion.h1>
          </div>
          {/* Text Sections */}
         
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
          <div className="flex items-center justify-center w-64 md:w-96 h-64 md:h-96 relative">
            {/* Animated dashed border */}
            <motion.div
              className="absolute w-full h-full border-2 border-dashed border-color-yellow rounded-full"
              variants={circleVariants}
              initial="initial"
              animate="animate"
            />

            {/* Fixed content in the center */}
            <motion.div
              variants={logoVariants}
              initial="hidden"
              animate="visible"
              className="flex items-center justify-center"
            >
              <div className="text-xl font-semibold text-white">
              <LazyLoadGif className="" src={hero3} alt="lazy load" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default VideoSection;
