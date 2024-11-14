import { motion } from "framer-motion";
import founder from '../../../assets/founder.png'
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
      className="relative w-full"
    >
      <div className="text-white text-4xl text-center mb-14">
        <h1 className="uppercase">Meet The Founder</h1>
      </div>
      <div className="w-full h-[400px] flex flex-col md:flex-row items-center gap-2"> {/* Container for the animated box */}
        <div className="text-2xl">
          <h1 className="text-white text-4xl mb-5">Reginald King Barawid</h1>
          <p className="text-white mx-auto">Founder, Head of Sofreg solutions.
          Information Technology, Software Engineer expert.</p>
        </div>
        <motion.div
          // variants={fillVariants}
          // initial="initial"
          // animate="animate"
          className="w-full h-fit"
        >
          <img className="w-full h-[400px] rounded-md"  src={founder} alt="" />
          {/* This is where the animation happens */}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default FounderSection;
