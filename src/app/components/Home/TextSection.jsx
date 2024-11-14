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

      <p className="text-slate-100 text-base md:text-xl mt-4 leading-relaxed">
        Unlock your brand’s potential with innovative solutions that elevate
        your visuals and online presence. Stand out today!
      </p>
    </motion.div>
  );
};

export default TextSection;
