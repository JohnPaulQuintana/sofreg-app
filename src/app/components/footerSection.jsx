import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
// import { IoIosArrowRoundForward } from "react-icons/io";
import logo from "../../assets/PNG/LOGO 2.1.png";
import { ImFacebook2 } from "react-icons/im";

const FooterSection = () => {
  // Separate state for each dropdown item
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);

  // Toggle dropdown visibility based on index
  const toggleDropdown = (index) => {
    setOpenDropdownIndex(openDropdownIndex === index ? null : index);
  };

  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-slate-100 p-2">
      {/* <!-- For smaller screens --> */}
      <div className="sm:block md:hidden p-20">
        <div className="flex flex-col items-center">
          <img className="w-36 mb-2" src={logo} alt="" />
          <div className="flex items-center gap-4 mb-4">
            <ImFacebook2 className="size-5" />
            {/* <ImFacebook2 className="size-5" />
            <ImFacebook2 className="size-5" />
            <ImFacebook2 className="size-5" /> */}
          </div>
        </div>

         {/* Dropdown 1 */}
         <div className="border-b-2 border-gray-500">
          <h1
            className="flex justify-between text-color-dark items-center gap-2 p-4 text-xl font-bold cursor-pointer"
            onClick={() => toggleDropdown(1)} // Toggle dropdown 1
          >
            
              Projects

              <motion.div
              animate={{
                rotate: openDropdownIndex === 1 ? 180 : 0,
              }}
              transition={{
                duration: 0.3,
                type: "spring",
                stiffness: 100,
              }}
              className="text-xl"
            >
              {openDropdownIndex === 1 ? <FaMinus /> : <FaPlus />}
            </motion.div>
          </h1>

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
                <div className="p-4 flex flex-col gap-2 -mt-5">
                  <a href="#" className="text-color-dark">
                        In-Development
                  </a>
                  {/* <a href="#" className="text-color-dark">
                        Project 1
                  </a>
                  <a href="#" className="text-color-dark">
                        Project 1
                  </a>
                  <a href="#" className="text-color-dark">
                        Project 1
                  </a> */}
                  
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
         {/* Dropdown 2 */}
         <div className="border-b-2 border-gray-500">
          <h1
            className="flex justify-between text-color-dark items-center gap-2 p-4 text-xl font-bold cursor-pointer"
            onClick={() => toggleDropdown(2)} // Toggle dropdown 1
          >
            
              Services

              <motion.div
              animate={{
                rotate: openDropdownIndex === 2 ? 180 : 0,
              }}
              transition={{
                duration: 0.3,
                type: "spring",
                stiffness: 100,
              }}
              className="text-xl"
            >
              {openDropdownIndex === 2 ? <FaMinus /> : <FaPlus />}
            </motion.div>
          </h1>

          <AnimatePresence>
            {openDropdownIndex === 2 && (
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
                <div className="p-4 flex flex-col gap-2 -mt-5">
                  <a href="#" className="text-color-dark">
                        Design
                  </a>
                  <a href="#" className="text-color-dark">
                        Web Solutions
                  </a>
                  <a href="#" className="text-color-dark">
                        Services 1
                  </a>
                  <a href="#" className="text-color-dark">
                        Video Production
                  </a>
                  
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
         {/* Dropdown 3 */}
         <div className="border-b-2 border-gray-500">
          <h1
            className="flex justify-between text-color-dark items-center gap-2 p-4 text-xl font-bold cursor-pointer"
            onClick={() => toggleDropdown(3)} // Toggle dropdown 1
          >
            
              About

              <motion.div
              animate={{
                rotate: openDropdownIndex === 3 ? 180 : 0,
              }}
              transition={{
                duration: 0.3,
                type: "spring",
                stiffness: 100,
              }}
              className="text-xl"
            >
              {openDropdownIndex === 3 ? <FaMinus /> : <FaPlus />}
            </motion.div>
          </h1>

          <AnimatePresence>
            {openDropdownIndex === 3 && (
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
                <div className="p-4 flex flex-col gap-2 -mt-5">
                  <a href="#" className="text-color-dark">
                        Profile
                  </a>
                  
                  
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
         {/* Dropdown 4 */}
         <div className="border-b-2 border-gray-500">
          <h1
            className="flex justify-between text-color-dark items-center gap-2 p-4 text-xl font-bold cursor-pointer"
            onClick={() => toggleDropdown(4)} // Toggle dropdown 1
          >
            
              Quick Links

              <motion.div
              animate={{
                rotate: openDropdownIndex === 4 ? 180 : 0,
              }}
              transition={{
                duration: 0.3,
                type: "spring",
                stiffness: 100,
              }}
              className="text-xl"
            >
              {openDropdownIndex === 4 ? <FaMinus /> : <FaPlus />}
            </motion.div>
          </h1>

          <AnimatePresence>
            {openDropdownIndex === 4 && (
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
                <div className="p-4 flex flex-col gap-2 -mt-5">
                  <a href="#" className="text-color-dark">
                        Privacy Policy
                  </a>
                  <a href="#" className="text-color-dark">
                    Terms of use
                  </a>
                  <a href="#" className="text-color-dark">
                    Refund Policy
                  </a>
                  <a href="#" className="text-color-dark">
                    Copyrights Policy
                  </a>
                  
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="text-sm text-center mt-2 text-color-dark font-semibold">
            <span>© SOFREG SOLUTION. All rights reserved {currentYear}</span>
        </div>
      </div>

      {/* <!-- For larger screens --> */}
      <div className="hidden md:block p-4 px-20">
        <div className="flex items-center">
          <div className="flex-1">
            <img className="w-32 mb-2" src={logo} alt="" />
            <div className="flex items-center gap-4 mb-4">
              <ImFacebook2 className="size-6" />
              <ImFacebook2 className="size-6" />
              <ImFacebook2 className="size-6" />
              <ImFacebook2 className="size-6" />
            </div>
            <div className="font-semibold text-color-dark">
              <span>@SOFREG SOLUTION.</span>
              <span className="block">All rights reserved 2023</span>
            </div>
          </div>

          <div className="flex-1">
            <span className="text-xl font-bold text-color-dark">Projects</span>
            <div className="flex flex-col gap-1">
              <span>In development</span>
              
            </div>
          </div>
          <div className="flex-1">
            <span className="text-xl font-bold text-color-dark">Services</span>
            <div className="flex flex-col gap-1">
            <a href="#" className="text-color-dark">
                        Design
                  </a>
                  <a href="#" className="text-color-dark">
                        Web Solutions
                  </a>
                  <a href="#" className="text-color-dark">
                        Services 1
                  </a>
                  <a href="#" className="text-color-dark">
                        Video Production
                  </a>
            </div>
          </div>
          <div className="flex-1">
            <span className="text-xl font-bold text-color-dark">About</span>
            <div className="flex flex-col gap-1">
              <span>Company Profile</span>
              
            </div>
          </div>
          <div className="flex-1">
            <span className="text-xl font-bold text-color-dark">
              Quick Links
            </span>
            <div className="flex flex-col gap-1">
            <a href="#" className="text-color-dark">
                        Privacy Policy
                  </a>
                  <a href="#" className="text-color-dark">
                    Terms of use
                  </a>
                  <a href="#" className="text-color-dark">
                    Refund Policy
                  </a>
                  <a href="#" className="text-color-dark">
                    Copyrights Policy
                  </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
