// import { IoHome } from "react-icons/io5";
// import { GoProjectSymlink } from "react-icons/go";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useState } from "react";
import logo from "../../assets/PNG/LOGO 2.2_1.png";
import hero1 from "../../assets/hero1.png";
import hero2 from "../../assets/hero2.png";
import hero3 from "../../assets/hero3.png";
// Importing SVG as a React component
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
// Animation variants for the text inside the card
const textVariants = [
  { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } }, // Slide up
  { initial: { opacity: 0, y: -20 }, animate: { opacity: 1, y: 0 } }, // Slide down
  { initial: { opacity: 0, rotate: -10 }, animate: { opacity: 1, rotate: 0 } }, // Rotate in
  { initial: { opacity: 0, scale: 0.5 }, animate: { opacity: 1, scale: 1 } }, // Scale up
];

const cardVariants = {
  initial: { scale: 1 },
  hover: { scale: 1.05 }, // Increase scale on hover
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const randomTextVariant =
    textVariants[Math.floor(Math.random() * textVariants.length)];
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const [isHovered, setIsHovered] = useState(false);
  let timeoutId;

  const handleMouseEnter = () => {
    clearTimeout(timeoutId); // Clear any existing timeout to prevent flicker
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setIsHovered(false);
    }, 200); // Adjust delay as needed to give time to hover
  };

  // Separate state for each dropdown item
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);

  // Toggle dropdown visibility based on index
  const toggleDropdown = (index) => {
    setOpenDropdownIndex(openDropdownIndex === index ? null : index);
  };

  return (
    <div className="fixed w-full bg-background-dark z-20 shadow-md">
      {/* Navbar */}
      <div className="bg-background-dark w-full border-b-2 border-slate-50 flex justify-between items-center p-4 md:px-10">
        <div>
          <img src={logo} className="w-[150px]" alt="" />
        </div>
        {/* Hamburger icon (only visible on smaller screens) */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-slate-50 focus:outline-none md:hidden"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>

        {/* Full navigation (only visible on larger screens) */}
        <nav className="hidden md:flex space-x-4">
          <a href="#" className="text-white">
            Projects
          </a>
          <div
            className="group"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <a href="#" className="text-white">
              Services
            </a>
            {isHovered && (
              <motion.div
                className="absolute left-0 top-10 z-[999] bg-color-dark text-color-dark p-4 shadow-lg mt-2 w-full pointer-events-auto"
                initial={{ opacity: 0, pointerEvents: "none" }}
                animate={{ opacity: 1, pointerEvents: "auto" }}
                exit={{ opacity: 0, pointerEvents: "none" }}
                transition={{ duration: 0.3 }}
              >
                {/* Card content here */}
                <div className="flex flex-wrap items-stretch justify-center gap-10">
                  {/* Card 1 */}
                  <Link
                    to="/services/design"
                    state={{
                      serviceType: "Design",
                      description: "We have Designed for over 260 projects.",
                    }}
                    className="w-[25%]"
                  >
                    <motion.div
                      variants={cardVariants}
                      whileHover="hover"
                      className=" flex justify-between items-center p-5 rounded-md bg-color-sky h-[150px]"
                    >
                      {" "}
                      {/* Set a fixed height */}
                      <img className="w-[100px]" src={hero1} alt="Design" />
                      <div className="text-2xl font-bold flex-grow">
                        <span>Design</span>
                        <span className="block text-xs font-normal">
                          Handcraft the user experience.
                        </span>
                        <IoIosArrowRoundForward className="size-10" />
                      </div>
                    </motion.div>
                  </Link>

                  <Link
                    to="/services/web"
                    state={{
                      serviceType: "Web Solutions",
                      description:
                        "We have designed Web Solutions for over 260 projects.",
                    }}
                    className="w-[25%]"
                  >
                    <motion.div
                      variants={cardVariants}
                      whileHover="hover"
                      className=" flex justify-between items-center p-5 rounded-md bg-pink-200 h-[150px]"
                    >
                      {" "}
                      {/* Set a fixed height */}
                      <img
                        className="w-[100px]"
                        src={hero2}
                        alt="Web Solutions"
                      />
                      <div className="text-2xl font-bold flex-grow">
                        <span>Web Solutions</span>
                        <span className="block text-xs font-normal">
                          Handcraft the user Website.
                        </span>
                        <IoIosArrowRoundForward className="size-10" />
                      </div>
                    </motion.div>
                  </Link>

                  <Link
                    to="/services/video"
                    state={{
                      serviceType: "Video Production",
                      description:
                        "We have designed Video Production for over 260 projects.",
                    }}
                    className="w-[25%]"
                  >
                    <motion.div
                      variants={cardVariants}
                      whileHover="hover"
                      className=" flex justify-between items-center p-5 rounded-md bg-yellow-100 h-[150px]"
                    >
                      {" "}
                      {/* Set a fixed height */}
                      <img
                        className="w-[100px]"
                        src={hero3}
                        alt="Video Production"
                      />
                      <div className="text-2xl font-bold flex-grow">
                        <span>Video Production</span>
                        <span className="block text-xs font-normal">
                          Handcraft the user video.
                        </span>
                        <IoIosArrowRoundForward className="size-10" />
                      </div>
                    </motion.div>
                  </Link>

                  {/* Card 2 */}

                  {/* Card 3 */}
                </div>
              </motion.div>
            )}
          </div>

          <Link to="/profile/about" className="text-white">
            About
          </Link>

          <a href="#" className="text-white">
            Career
          </a>
          <a href="#" className="px-4 rounded-sm bg-white text-color-dark">
            Contact
          </a>
        </nav>
      </div>

      {/* Off-canvas Menu */}
      <div
        className={`fixed top-0 right-0 h-full bg-background-dark text-slate-50 w-64 shadow-lg transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        {/* Close Button */}
        <button
          onClick={toggleMenu}
          className="absolute top-4 right-4 text-slate-50"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
        {/* Menu Items */}
        <div className="p-6">
          <h2 className="text-2xl mb-4">Menu</h2>
          {isOpen && (
            <ul className="text-xl">
              <motion.li
                initial={randomTextVariant.initial}
                animate={randomTextVariant.animate}
                transition={{ duration: 0.3 }}
                style={{ zIndex: 2 }} // Set a lower z-index for the card
                className="py-2 border-b border-slate-50 flex items-center gap-2"
              >
                Home
              </motion.li>

              <motion.li
                initial={randomTextVariant.initial}
                animate={randomTextVariant.animate}
                transition={{ duration: 0.4 }}
                style={{ zIndex: 2 }} // Set a lower z-index for the card
                className="py-2 border-b border-slate-50 flex items-center gap-2"
              >
                Projects
              </motion.li>

              {/* Dropdown 1 */}
              <motion.li
                onClick={() => toggleDropdown(1)}
                initial={randomTextVariant.initial}
                animate={randomTextVariant.animate}
                transition={{ duration: 0.5 }}
                style={{ zIndex: 2 }} // Set a lower z-index for the card
                className="py-2 border-b border-slate-50 flex flex-col gap-2"
              >
                <span className="text-start">Services</span>
                <AnimatePresence>
                  {openDropdownIndex === 1 && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{
                        opacity: 1,
                        height: "auto",
                      }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{
                        duration: 0.3,
                        ease: "easeInOut",
                      }}
                      className="overflow-hidden"
                    >
                      <div className="">
                        <motion.div
                          className="bg-color-dark text-color-dark p-4 shadow-lg mt-2 w-full pointer-events-auto"
                          initial={{ opacity: 0, pointerEvents: "none" }}
                          animate={{ opacity: 1, pointerEvents: "auto" }}
                          exit={{ opacity: 0, pointerEvents: "none" }}
                          transition={{ duration: 0.3 }}
                        >
                          {/* Card content here */}
                          <div className="flex flex-col flex-wrap items-stretch w-full gap-2">
                            {/* Card 1 */}
                            <Link
                              to="/services/design"
                              state={{
                                serviceType: "Design",
                                description:
                                  "We have Designed for over 260 projects.",
                              }}
                              className="w-full"
                            >
                              <motion.div
                                variants={cardVariants}
                                whileHover="hover"
                                className=" flex flex-col justify-between items-center p-5 rounded-md bg-color-sky h-[150px]"
                              >
                                {" "}
                                {/* Set a fixed height */}
                                <img
                                  className="w-[60px]"
                                  src={hero1}
                                  alt="Design"
                                />
                                <div className="text-center text-sm font-bold flex-grow">
                                  <span>Design</span>
                                  <span className="block text-xs font-normal">
                                    Handcraft the user experience.
                                  </span>
                                  <IoIosArrowRoundForward className="size-7 mx-auto" />
                                </div>
                              </motion.div>
                            </Link>

                            <Link
                              to="/services/web"
                              state={{
                                serviceType: "Web Solutions",
                                description:
                                  "We have designed Web Solutions for over 260 projects.",
                              }}
                              className="w-full"
                            >
                              <motion.div
                                variants={cardVariants}
                                whileHover="hover"
                                className=" flex flex-col justify-between items-center p-5 rounded-md bg-pink-200 h-[150px]"
                              >
                                {" "}
                                {/* Set a fixed height */}
                                <img
                                  className="w-[60px]"
                                  src={hero2}
                                  alt="Web Solutions"
                                />
                                <div className="text-sm text-center font-bold flex-grow">
                                  <span>Web Solutions</span>
                                  <span className="block text-xs font-normal">
                                    Handcraft the user Website.
                                  </span>
                                  <IoIosArrowRoundForward className="size-7 mx-auto" />
                                </div>
                              </motion.div>
                            </Link>

                            <Link
                              to="/services/video"
                              state={{
                                serviceType: "Video Production",
                                description:
                                  "We have designed Video Production for over 260 projects.",
                              }}
                              className="w-full"
                            >
                              <motion.div
                                variants={cardVariants}
                                whileHover="hover"
                                className=" flex flex-col justify-between items-center p-5 rounded-md bg-yellow-100 h-[150px]"
                              >
                                {" "}
                                {/* Set a fixed height */}
                                <img
                                  className="w-[60px]"
                                  src={hero3}
                                  alt="Video Production"
                                />
                                <div className="text-sm text-center font-bold flex-grow">
                                  <span>Video Production</span>
                                  <span className="block text-xs font-normal">
                                    Handcraft the user video.
                                  </span>
                                  <IoIosArrowRoundForward className="size-7 mx-auto" />
                                </div>
                              </motion.div>
                            </Link>

                            {/* Card 2 */}

                            {/* Card 3 */}
                          </div>
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.li>
              <motion.li
                initial={randomTextVariant.initial}
                animate={randomTextVariant.animate}
                transition={{ duration: 0.6 }}
                style={{ zIndex: 2 }} // Set a lower z-index for the card
                className="py-2 border-b border-slate-50 flex items-center gap-2"
              >
                About
              </motion.li>
              <motion.li
                initial={randomTextVariant.initial}
                animate={randomTextVariant.animate}
                transition={{ duration: 0.7 }}
                style={{ zIndex: 2 }} // Set a lower z-index for the card
                className="py-2 border-b border-slate-50 flex items-center gap-2"
              >
                Career
              </motion.li>
            </ul>
          )}
        </div>
        {isOpen && (
          <div className="absolute bottom-10 flex flex-col gap-5 w-full px-2">
            {/* <div className="text-xl flex flex-col gap-5">
              <motion.a
                href="#"
                initial={randomTextVariant.initial}
                animate={randomTextVariant.animate}
                transition={{ duration: 0.3 }}
                style={{ zIndex: 2 }} // Set a lower z-index for the card
                className=""
              >
                email@email.com
              </motion.a>
              <motion.div
                initial={randomTextVariant.initial}
                animate={randomTextVariant.animate}
                transition={{ duration: 0.3 }}
                style={{ zIndex: 2 }} // Set a lower z-index for the card
                className="flex flex-col"
              >
                <span>Phone:</span>
                <span>+12345678901</span>
              </motion.div>
            </div> */}
            <motion.button
              initial={randomTextVariant.initial}
              animate={randomTextVariant.animate}
              transition={{ duration: 0.3 }}
              style={{ zIndex: 2 }} // Set a lower z-index for the card
              type="button"
              className="bg-white text-color-dark p-2 w-full rounded-md"
            >
              Contact
            </motion.button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
