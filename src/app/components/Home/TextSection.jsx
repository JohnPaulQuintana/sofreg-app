import { motion } from "framer-motion";

const TextVariants = {
  hidden: {
    opacity: 0,
    y: "5vh",
    width: "100%",
  },
  visible: {
    opacity: 1,
    width: "100%", // Adjust as needed for the final size
    y: "0",
    transition: { duration: 1 },
  },
};

const TextSection = () => {
  // console.log(props)
  return (
    <div className="flex flex-col">
      <motion.div
      variants={TextVariants}
      initial="hidden"
      animate="visible"
      className="p-5 md:text-left space-y-0 text-justify md:w-fit"
    >
      <h1 className="text-5xl md:text-6xl font-bold text-white">Discover</h1>
      <h1 className="text-5xl md:text-6xl font-bold text-white">Elevate</h1>
      <h1 className="text-5xl md:text-6xl font-bold text-white">
        Revolutionize
      </h1>

      <p className="text-slate-100 text-base md:text-xl mt-4 mb-5 leading-relaxed">
        Unlock your brand’s potential with innovative solutions that elevate
        your visuals and online presence. Stand out today!
      </p>

      
    </motion.div>

    <div className="ps-5">
    <button className="bg-color-sky p-4 rounded-md font-bold text-slate-800 w-[200px] transition ease-in delay-75 hover:scale-105" type="button">Design A Quote</button>
    </div>
    </div>
  );
};

export default TextSection;
