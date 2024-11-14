import Navbar from "../components/Navbar";
import FooterSection from "../components/footerSection";
import QuotationSection from "../components/QuotationSection";
import { useLocation } from "react-router-dom";
import { GoDotFill } from "react-icons/go";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import testImage from "../../assets/services/test.png";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useEffect, useState, useRef } from "react";
const ServicesPage = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  const { serviceType, description } = location.state || {};

  // Determine color class based on service type
  const colorClass =
    serviceType === "Design"
      ? "text-color-sky"
      : serviceType === "Web Solutions"
      ? "text-color-magenta"
      : serviceType === "Video Production"
      ? "text-color-yellow"
      : "text-white"; // Default color if none match
  const colorBackClass =
    serviceType === "Design"
      ? "color-sky"
      : serviceType === "Web Solutions"
      ? "color-magenta"
      : serviceType === "Video Production"
      ? "color-yellow"
      : "white"; // Default color if none match

  const [isInView, setIsInView] = useState(false);
  const elementRef = useRef(null); // Reference for the element
  // Set up IntersectionObserver to detect when the element is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true); // Trigger animation when in view
        } else {
          setIsInView(false); // Reset animation when out of view
        }
      },
      {
        threshold: 0.2, // Trigger when 20% of the element is visible
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.disconnect(); // Clean up observer when the component unmounts
      }
    };
  }, []);
  const containerVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.3,
        staggerChildren: 0.3,
      },
    },
  };

  const childVariants = {
    initial: {
      opacity: 0,
      y: 40, // start from a slightly lower position
    },
    animate: {
      opacity: 1,
      y: 0, // move to the normal position
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 25,
      },
    },
  };

  const services = [
    {
      category: "Design",
      items: [
        {
          title: "Graphic Design",
          description:
            "Create visually stunning graphics for print and digital media.",
          image: testImage,
        },
        {
          title: "UI/UX Design",
          description:
            "Design user-friendly interfaces and experiences for websites and apps.",
          image: testImage,
        },
        {
          title: "Logo Design",
          description: "Design custom logos that define your brand identity.",
          image: testImage,
        },
      ],
    },
    {
      category: "Web Solutions",
      items: [
        {
          title: "Web Development",
          description:
            "Build responsive and high-performing websites using modern technologies.",
          image: testImage,
        },
        {
          title: "E-commerce Solutions",
          description:
            "Create and manage online stores with payment integrations.",
          image: testImage,
        },
        {
          title: "SEO Optimization",
          description: "Improve your website’s visibility on search engines.",
          image: testImage,
        },
      ],
    },
    {
      category: "Video Production",
      items: [
        {
          title: "Corporate Videos",
          description:
            "Produce professional videos for business promotions and internal communication.",
          image: testImage,
        },
        {
          title: "Social Media Videos",
          description:
            "Create engaging videos for social media platforms to boost engagement.",
          image: testImage,
        },
        {
          title: "Product Demos",
          description:
            "Produce high-quality product demo videos to showcase your products.",
          image: testImage,
        },
      ],
    },
  ];

  return (
    <>
      <Navbar />
      <div className="p-10"></div>

      <div className="relative border-l-8 border-color-dark flex flex-col gap-10 items-center justify-center p-6 md:p-12 max-w-5xl mx-auto">
        <motion.div
         key={location.key} // Forces the component to re-mount on route change
         ref={elementRef}
         variants={containerVariants}
         initial="initial"
         // animate="animate"
         animate={isInView ? "animate" : "initial"}
         exit="initial"
         whileInView="animate"
         viewport={{ once: false, amount: 0.3 }}
          className="relative mb-32"
        >
          <motion.span
            variants={childVariants}
            className={`block text-4xl font-bold tracking-wide ${colorClass}`}
          >
            {serviceType}
          </motion.span>
          <motion.div
            variants={childVariants}
            className="mt-5 flex gap-5 items-center"
          >
            <Link
              // key={location.key}
              className={`text-xl text-slate-200 hover:${colorClass}`}
              to="/"
            >
              <span>Home</span>
            </Link>
            <span className="text-slate-400">
              <GoDotFill />
            </span>
            <span className="text-slate-400">{serviceType}</span>
          </motion.div>

          <motion.div
            variants={childVariants}
            className="mt-5 text-6xl font-bold text-white"
          >
            <h1>{description}</h1>
          </motion.div>

          <motion.button
            variants={childVariants}
            type="button"
            className="flex items-center justify-center gap-2 bg-white mt-7 p-2 rounded-md font-bold text-xl hover:bg-slate-300"
          >
            Design A Quote{" "}
            <IoIosArrowRoundForward className="size-6 md:size-8" />
          </motion.button>
        </motion.div>

        <motion.div
         ref={elementRef}
        //  key={location.key} // Forces the component to re-mount on route change
         variants={containerVariants}
         initial="initial"
         // animate="animate"
         animate={isInView ? "animate" : "initial"}
         exit="initial"
         whileInView="animate"
         viewport={{ once: false, amount: 0.3 }}
          className="flex-1 w-full"
        >
          {services.map((category, index) => (
            <div key={index} className="mb-8">
              {category.category === serviceType && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 rounded-md">
                  {category.items.map((service, idx) => (
                    <motion.div
                      key={idx}
                      className="text-xl font-semibold mb-2 p-3 flex flex-col gap-5 hover:cursor-pointer transition ease-in duration-300 delay-75 hover:scale-105"
                      variants={childVariants}
                      whileInView="animate"
                      initial="initial"
                      viewport={{ once: false }} // Animation triggers every time the element enters the viewport
                    >
                      <span className="text-3xl font-bold text-slate-300">
                        {service.title}
                      </span>
                      <motion.img
                        variants={childVariants}
                        src={service.image}
                        alt="No image"
                      />
                      <motion.div variants={childVariants}>
                        <span className="text-white">
                          {service.description}
                        </span>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </motion.div>
      </div>

      <div className="md:col-span-2 w-full relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <QuotationSection key={location.key} background={colorBackClass} />
        </motion.div>
      </div>

      <div className="md:col-span-2 w-full relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <FooterSection />
        </motion.div>
      </div>
    </>
  );
};

export default ServicesPage;
