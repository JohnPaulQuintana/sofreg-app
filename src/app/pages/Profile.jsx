import Navbar from "../components/Navbar";
import FooterSection from "../components/footerSection";
import Logo from "../../assets/PNG/LOGO 2.2_1.png";
import { BiSolidQuoteLeft } from "react-icons/bi";
import { BiSolidQuoteRight } from "react-icons/bi";
import { SiSimpleanalytics } from "react-icons/si";
import { FaCheck } from "react-icons/fa6";
import { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Profile = () => {
  const location = useLocation();
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const containerVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.2,
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
      number: 1,
      title: "Enhance Brand Identity",
      description:
        "Develop compelling graphic designs that reflect our clients’ values and resonate with their target audiences.",
    },
    {
      number: 2,
      title: "Build Seamless Digital Experiences",
      description:
        "Create user-friendly websites that drive engagement, enhance usability, and support business growth.",
    },
    {
      number: 3,
      title: "Produce Engaging Multimedia Content",
      description:
        "Craft captivating videos that tell our clients' stories, boost brand awareness, and increase audience interaction.",
    },
    {
      number: 4,
      title: "Commit to Continuous Improvement",
      description:
        "Stay at the forefront of industry trends and technologies to provide cutting-edge solutions that keep our clients competitive.",
    },
  ];

  const strategies = [
    {
      icon: "SiSimpleanalytics",
      title: "Client-Centric Approach Strategy Plan",
      description:
        "Prioritize understanding client needs and objectives to deliver customized solutions that exceed expectations. Establish strong relationships built on trust and transparency.",
    },
    {
      icon: "SiSimpleanalytics",
      title: "Quality and Innovation Strategy Plan",
      description:
        "Commit to excellence by using the latest tools and techniques, ensuring high-quality outputs that stand out in the competitive market. Foster a culture of continuous learning and adaptation to stay ahead of industry trends.",
    },
    {
      icon: "SiSimpleanalytics",
      title: "Strategic Partnerships Strategy Plan",
      description:
        "Collaborate with other businesses and industry influencers to expand our reach, enhance service offerings, and access new markets.",
    },
  ];

  const companyProfile = [
    {
      number: 1,
      title: "Creative Expertise",
      description:
        "Our team of skilled designers, developers, and editors brings a wealth of experience and creativity to every project. We go beyond creation; we innovate, ensuring that your work stands out in today’s competitive landscape.",
    },
    {
      number: 2,
      title: "Comprehensive Services",
      description:
        "From impactful graphic design and dynamic web development to captivating video content, we offer a full suite of creative services. This allows you to streamline efforts and achieve cohesive branding across all platforms.",
    },
    {
      number: 3,
      title: "Timely Delivery",
      description:
        "Your time is valuable. With efficient processes and a dedicated team, we ensure projects are delivered on schedule, empowering you to meet deadlines and launch initiatives on time.",
    },
    {
      number: 4,
      title: "Commitment to Quality",
      description:
        "We take pride in our meticulous attention to detail and dedication to excellence. Every project undergoes rigorous quality assurance, ensuring you receive only the highest standard of work.",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="p-10"></div>
      <div className="relative border-l-8 flex flex-col gap-52 border-color-dark p-6 md:p-12 max-w-5xl mx-auto">
        <motion.div
          ref={elementRef}
          key={location.key} // Forces the component to re-mount on route change
          variants={containerVariants}
          initial="initial"
          // animate="animate"
          animate={isInView ? "animate" : "initial"}
          exit="initial"
          whileInView="animate"
          viewport={{ once: false, amount: 0.3 }}
          className="mt-20"
        >
          <motion.div variants={childVariants} className="flex-1">
            <img className="w-[200px]" src={Logo} alt="company profile" />
          </motion.div>

          <div className="flex flex-col gap-5 mb-20 font-bold px-2 border-color-sky border-l-8">
            <motion.span
              variants={childVariants}
              className="text-color-sky text-6xl uppercase"
            >
              Company Profile
            </motion.span>
            <motion.span
              variants={childVariants}
              className="text-xl block text-slate-300"
            >
              Sofreg Solutions is a dynamic creative agency specializing in
              Graphic Design, Web Development, and Video Editing.
            </motion.span>
          </div>
        </motion.div>

        <motion.div
          ref={elementRef}
          // key={location.key} // Forces the component to re-mount on route change
          variants={containerVariants}
          initial="initial"
          // animate="animate"
          animate={isInView ? "animate" : "initial"}
          exit="initial"
          whileInView="animate"
          viewport={{ once: false, amount: 0.3 }}
          className="flex flex-col gap-5"
        >
          <motion.span
            variants={childVariants}
            className="text-color-sky text-5xl uppercase font-bold"
          >
            Welcome to our company
          </motion.span>
          <motion.span
            variants={childVariants}
            className="text-slate-300 text-xl font-bold"
          >
            At Sofreg Solutions, we are excited to embark on a creative journey
            with you. As a start-up agency with proven and good reputation
            specializing in graphic design, web development, and video editing,
            we pride ourselves on transforming your ideas into impactful visual
            experiences. Our dedicated team is passionate about crafting
            innovative solutions that resonate with your audience and elevate
            your brand.
          </motion.span>

          <motion.span
            variants={childVariants}
            className="text-slate-300 text-xl font-bold"
          >
            We work collaboratively to ensure every project reflects your unique
            vision and goals. We believe in the power of creativity and
            technology to drive success, and we are here to guide you every step
            of the way. Welcome to a world of possibilities—let’s create
            something amazing together!
          </motion.span>
        </motion.div>

        <motion.div
          ref={elementRef}
          // key={location.key} // Forces the component to re-mount on route change
          variants={containerVariants}
          initial="initial"
          // animate="animate"
          animate={isInView ? "animate" : "initial"}
          exit="initial"
          whileInView="animate"
          viewport={{ once: false, amount: 0.3 }}
          className="flex flex-col gap-5"
        >
          <span className="text-color-sky text-5xl uppercase font-bold">
            Our
            <span className="block">COMPANY OBJECTIVE</span>
          </span>
          <span className="text-slate-300 text-xl border-l-8 px-2 border-color-sky font-bold">
            At Sofreg Solutions, our objective is to deliver innovative and
            high-quality creative services that empower businesses to
            communicate effectively and achieve their goals.
          </span>

          <motion.div
            // key={location.key} // Forces the component to re-mount on route change
            variants={containerVariants}
            initial="initial"
            animate="animate"
            exit="initial"
            whileInView="animate"
            viewport={{ once: false }}
            className="flex flex-col items-center gap-5 mt-5"
          >
            {services.map((service, index) => (
              <motion.div
                variants={childVariants}
                key={index}
                className="flex items-center gap-5 mt-5"
              >
                <div className="bg-color-sky w-[55px] h-[40px] rounded-full flex items-center justify-center font-bold text-color-dark text-2xl">
                  {service.number}
                </div>
                <p className="text-xl text-slate-300">
                  <b className="text-color-sky">{service.title}</b>:{" "}
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        ref={elementRef}
        key={location.key} // Forces the component to re-mount on route change
        variants={containerVariants}
        initial="initial"
        // animate="animate"
        animate={isInView ? "animate" : "initial"}
        exit="initial"
        whileInView="animate"
        viewport={{ once: false, amount: 0.3 }}
        className="bg-color-sky border w-full h-[300px] flex justify-center items-center"
      >
        <div className="text-4xl px-64 flex gap-5">
          <BiSolidQuoteLeft
            // variants={childVariants}
            className="size-28"
          />
          <motion.span
            variants={childVariants}
            className="ps-6 font-bold text-color-dark"
          >
            We ignite innovation through creativity, turning visions into
            engaging designs and digital experiences that inspire
          </motion.span>
          <BiSolidQuoteRight
            // variants={childVariants}
            className="size-28"
          />
        </div>
      </motion.div>

      <motion.div
        ref={elementRef}
        // key={location.key} // Forces the component to re-mount on route change
        variants={containerVariants}
        initial="initial"
        // animate="animate"
        animate={isInView ? "animate" : "initial"}
        exit="initial"
        whileInView="animate"
        viewport={{ once: false, amount: 0.3 }}
        className="relative border-l-8 flex flex-col gap-52 border-color-dark p-6 md:p-12 max-w-5xl mx-auto"
      >
        <div className="flex flex-col gap-5">
          <motion.span
            variants={childVariants}
            className="text-color-sky mb-10 text-5xl uppercase font-bold"
          >
            COMPANY
            <span className="block">MISSION & VISION</span>
          </motion.span>
          <motion.span
            variants={childVariants}
            className="text-slate-300 tracking-wide text-xl mb-10 border-l-8 px-2 border-color-sky font-semibold"
          >
            To be a global leader in sustainable innovation, transforming the
            way communities interact with technology. We envision a future where
            our cutting-edge solutions empower individuals and organizations to
            enhance their quality of life while actively contributing to the
            preservation of our planet. By pioneering advancements that
            prioritize environmental stewardship, we aim to inspire a movement
            towards a more sustainable and equitable world for generations to
            come
          </motion.span>
          <motion.span
            variants={childVariants}
            className="text-slate-300 tracking-wide text-xl border-l-8 px-2 border-color-sky font-semibold"
          >
            Our mission is to design and deliver innovative, eco-friendly
            products that not only meet the evolving needs of our customers but
            also promote a healthier planet. We are dedicated to fostering a
            culture of continuous improvement, where creativity and
            collaboration drive our success. We prioritize ethical practices and
            social responsibility, ensuring that every product we create
            supports our commitment to sustainability and community well-being.
            Through partnerships and engagement, we strive to make a positive
            impact. Your success is our{" "}
            <b className="text-color-sky">MISSION</b>
          </motion.span>
        </div>
      </motion.div>

      <motion.div
        ref={elementRef}
        // key={location.key} // Forces the component to re-mount on route change
        variants={containerVariants}
        initial="initial"
        // animate="animate"
        animate={isInView ? "animate" : "initial"}
        exit="initial"
        whileInView="animate"
        viewport={{ once: false, amount: 0.3 }}
        className="relative border-l-8 flex flex-col gap-52 border-color-dark p-6 md:p-12 max-w-5xl mx-auto"
      >
        <div className="flex flex-col gap-5">
          <motion.span
            variants={childVariants}
            className="text-color-sky mb-10 text-5xl uppercase font-bold"
          >
            COMPANY
            <span className="block">BUSINESS STRATEGY</span>
          </motion.span>

          <motion.span
            variants={childVariants}
            className="text-slate-300 mb-10 tracking-wide text-xl mb-10 border-l-8 px-2 border-color-sky font-semibold"
          >
            At Sofreg Solutions, our business strategy is designed to position
            us as a leader in the creative industry by delivering innovative and
            high-quality services in graphic design, web development, and video
            editing. We focus on a client-centric approach, ensuring that we
            fully understand our clients' needs and objectives to provide
            tailored solutions that exceed their expectations. We aim to offer a
            diverse range of services, allowing clients to find all their
            creative needs in one place.
          </motion.span>

          <motion.div variants={childVariants} className="">
            {strategies.map((strategy, index) => (
              <div key={index} className="flex items-center gap-6 mb-20">
                <div className="bg-color-sky p-2 rounded-full flex items-center justify-center font-extrabold text-color-dark">
                  <SiSimpleanalytics className="size-16 border-4 p-1 rounded-full" />
                </div>
                <div className="grid grid-cols-3 items-center">
                  <h1 className="font-bold text-xl text-color-sky">
                    {strategy.title}
                  </h1>
                  <p className="col-span-2 text-slate-300 font-semibold text-xl font-sans">
                    {strategy.description}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        ref={elementRef}
        // key={location.key} // Forces the component to re-mount on route change
        variants={containerVariants}
        initial="initial"
        // animate="animate"
        animate={isInView ? "animate" : "initial"}
        exit="initial"
        whileInView="animate"
        viewport={{ once: false, amount: 0.3 }}
        className="relative border-l-8 flex flex-col gap-52 border-color-dark p-6 md:p-12 max-w-5xl mx-auto"
      >
        <div className="flex flex-col gap-5">
          <motion.span
            variants={childVariants}
            className="text-color-sky mb-10 text-5xl uppercase font-bold"
          >
            WHY
            <span className="block">Choose us?</span>
          </motion.span>
          <motion.span
            variants={childVariants}
            className="text-slate-300 mb-10 tracking-wide text-xl mb-10 border-l-8 px-2 border-color-sky font-semibold"
          >
            Choosing Sofreg Solutions means partnering with a dedicated team
            that is passionate about bringing your ideas to life. Let us help
            you elevate your brand and make a lasting impact because your
            success is our mission.
          </motion.span>

          <motion.div variants={childVariants} className="">
            {companyProfile.map((profile, index) => (
              <div key={index} className="flex items-center gap-6 mb-20">
                <div className="bg-color-sky p-2 rounded-full flex items-center justify-center font-extrabold text-color-dark">
                  <FaCheck className="size-16 border-4 p-1 rounded-full" />
                </div>

                <p className="col-span-2 text-slate-300 font-semibold text-xl font-sans">
                  <span className="font-bold text-color-sky">
                    {profile.title}:
                  </span>{" "}
                  {profile.description}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* <motion.div
        ref={elementRef}
        // key={location.key} // Forces the component to re-mount on route change
        variants={containerVariants}
        initial="initial"
        // animate="animate"
        animate={isInView ? "animate" : "initial"}
        exit="initial"
        whileInView="animate"
        viewport={{ once: false, amount: 0.3 }}
        className="bg-color-sky border w-full h-[10px] flex justify-center items-center"
      >
        <div className="text-4xl px-64 flex gap-5"></div>
      </motion.div> */}

      <motion.div
        ref={elementRef}
        // key={location.key} // Forces the component to re-mount on route change
        variants={containerVariants}
        initial="initial"
        // animate="animate"
        animate={isInView ? "animate" : "initial"}
        exit="initial"
        whileInView="animate"
        viewport={{ once: false, amount: 0.3 }}
        className="relative border-l-8 flex flex-col gap-52 border-color-dark p-6 md:p-12 max-w-5xl mx-auto"
      >
        <div className="flex flex-col gap-5">
          <motion.span
            variants={childVariants}
            className="text-color-sky mb-10 text-5xl uppercase font-bold"
          >
            Meet the Team
            <span className="block">Behind the Sofreg Solutions</span>
          </motion.span>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            <div className="bg-slate-300 rounded-md overflow-hidden">
              <motion.img
                variants={childVariants}
                className="w-full"
                src="https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/50dab922-5d48-4c6b-8725-7fd0755d9334/3a3f2d35-8167-4708-9ef0-bdaa980989f9.png"
                alt=""
                // srcset=""
              />
              <motion.div
                variants={childVariants}
                className="flex flex-col items-center py-4"
              >
                <h1 className="text-2xl font-bold mt-2">John Paul Quintana</h1>
                <h3 className="font-semibold">Frontend Web Developer</h3>
                {/* <p className="text-balance">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio porro consequatur iusto eum nulla sequi sed officiis, rerum facere facilis? Architecto repudiandae harum ad veniam veritatis nobis assumenda maiores laborum.</p> */}
              </motion.div>
            </div>
            <motion.div
              variants={childVariants}
              className="bg-slate-300 rounded-md overflow-hidden"
            >
              <img
                className="w-full"
                src="https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/50dab922-5d48-4c6b-8725-7fd0755d9334/3a3f2d35-8167-4708-9ef0-bdaa980989f9.png"
                alt=""
                // srcset=""
              />
              <motion.div
                variants={childVariants}
                className="flex flex-col items-center py-4"
              >
                <h1 className="text-2xl font-bold mt-2">John Paul Quintana</h1>
                <h3 className="font-semibold">Frontend Web Developer</h3>
                {/* <p className="text-balance">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio porro consequatur iusto eum nulla sequi sed officiis, rerum facere facilis? Architecto repudiandae harum ad veniam veritatis nobis assumenda maiores laborum.</p> */}
              </motion.div>
            </motion.div>
            <motion.div
              variants={childVariants}
              className="bg-slate-300 rounded-md overflow-hidden"
            >
              <img
                className="w-full"
                src="https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/50dab922-5d48-4c6b-8725-7fd0755d9334/3a3f2d35-8167-4708-9ef0-bdaa980989f9.png"
                alt=""
                // srcset=""
              />
              <div className="flex flex-col items-center py-4">
                <h1 className="text-2xl font-bold mt-2">John Paul Quintana</h1>
                <h3 className="font-semibold">Frontend Web Developer</h3>
                {/* <p className="text-balance">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio porro consequatur iusto eum nulla sequi sed officiis, rerum facere facilis? Architecto repudiandae harum ad veniam veritatis nobis assumenda maiores laborum.</p> */}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

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

export default Profile;
