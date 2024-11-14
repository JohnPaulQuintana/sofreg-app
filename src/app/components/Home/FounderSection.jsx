import { motion } from "framer-motion";
import founder from '../../../assets/founder-1.png'
const FounderSection = () => {
  const containerVariant = {
    initial: {
     opacity: 0
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 1,
        // delay: 0.2,
      }
    },
  };

  return (
    <motion.div
      variants={containerVariant}
      initial="initial"
      whileInView="animate" // Animate when in view
      viewport={{ once: false, amount: 0.5 }} // Trigger when 50% of the element is in view
      className="relative w-full border p-5 md:p-0 border-color-sky rounded-md flex flex-col md:flex-row md:items-center"
    >
      <div className="text-white text-4xl md:text-center">
        <h1 className="uppercase text-color-sky mb-5">Meet The Founder</h1>
      </div>
      <div className="w-full flex flex-col md:flex-row items-center gap-2"> {/* Container for the animated box */}
        <div className="text-xl">
          <h1 className="text-white text-3xl mb-5">Reginald King Barawid</h1>
          <p className="text-white mx-auto">Founder, Head of Sofreg solutions.
          Information Technology, Software Engineer expert.</p>
        </div>
        <motion.div
          // variants={fillVariants}
          // initial="initial"
          // animate="animate"
          className="w-full h-fit flex items-center justify-center"
        >
          <img className="w-[400px] md:w-full h-[300px] rounded-md"  src={founder} alt="" />
          {/* This is where the animation happens */}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default FounderSection;
