import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import Ideas from "../../../assets/ideas.png";

const FrequentlySection = () => {
  // Separate state for each dropdown item
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);

  // Toggle dropdown visibility based on index
  const toggleDropdown = (index) => {
    setOpenDropdownIndex(openDropdownIndex === index ? null : index);
  };

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="w-full mx-auto mt-10">
        {/* Dropdown 1 */}
        <div className="border-b-2 border-gray-500">
          <h1
            className="flex text-white items-center gap-2 p-4 text-2xl font-bold cursor-pointer"
            onClick={() => toggleDropdown(1)} // Toggle dropdown 1
          >
            <motion.div
              animate={{
                rotate: openDropdownIndex === 1 ? 180 : 0,
              }}
              transition={{
                duration: 0.3,
                type: "spring",
                stiffness: 100,
              }}
              className="text-2xl"
            >
              {openDropdownIndex === 1 ? <FaMinus /> : <FaPlus />}
            </motion.div>
            How To Enhance Motivation for Better Business Leads?
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
                <div className="p-4 px-12 flex flex-col gap-5">
                  <p className="text-slate-300">
                    Read how businessmen must use UX design and enhancement of
                    motivation for better business leads. Reveal the secret now!
                  </p>
                  <a
                    href="#"
                    className="text-red-400 font-bold flex items-center gap-3"
                  >
                    Read More <IoIosArrowRoundForward className="size-6" />
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Dropdown 2 */}
        <div className="border-b-2 border-gray-500">
          <h1
            className="flex text-white items-center gap-2 p-4 text-2xl font-bold cursor-pointer"
            onClick={() => toggleDropdown(2)} // Toggle dropdown 2
          >
            <motion.div
              animate={{
                rotate: openDropdownIndex === 2 ? 180 : 0,
              }}
              transition={{
                duration: 0.3,
                type: "spring",
                stiffness: 100,
              }}
              className="text-2xl"
            >
              {openDropdownIndex === 2 ? <FaMinus /> : <FaPlus />}
            </motion.div>
            How To Enhance Motivation for Better Business Leads?
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
                <div className="p-4 px-12 flex flex-col gap-5">
                  <p className="text-slate-300">
                    Read how businessmen must use UX design and enhancement of
                    motivation for better business leads. Reveal the secret now!
                  </p>
                  <a
                    href="#"
                    className="text-red-400 font-bold flex items-center gap-3"
                  >
                    Read More <IoIosArrowRoundForward className="size-6" />
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Dropdown 3 */}
        <div className="border-b-2 border-gray-500">
          <h1
            className="flex text-white items-center gap-2 p-4 text-2xl font-bold cursor-pointer"
            onClick={() => toggleDropdown(3)} // Toggle dropdown 3
          >
            <motion.div
              animate={{
                rotate: openDropdownIndex === 3 ? 180 : 0,
              }}
              transition={{
                duration: 0.3,
                type: "spring",
                stiffness: 100,
              }}
              className="text-2xl"
            >
              {openDropdownIndex === 3 ? <FaMinus /> : <FaPlus />}
            </motion.div>
            How To Enhance Motivation for Better Business Leads?
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
                <div className="p-4 px-12 flex flex-col gap-5">
                  <p className="text-slate-300">
                    Read how businessmen must use UX design and enhancement of
                    motivation for better business leads. Reveal the secret now!
                  </p>
                  <a
                    href="#"
                    className="text-red-400 font-bold flex items-center gap-3"
                  >
                    Read More <IoIosArrowRoundForward className="size-6" />
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Image Section */}
      <div className="mt-14">
        <img src={Ideas} alt="Ideas" className="w-full h-auto" />
      </div>
    </div>
  );
};

export default FrequentlySection;
