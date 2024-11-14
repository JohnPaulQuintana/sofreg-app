import { useState, useEffect, useRef } from 'react';
import { useLocation } from "react-router-dom";
const QuotationSection = (props) => {
  const location = useLocation();
  // console.log(props.background)
  const bg = useRef(props.background)
  console.log(bg.current)
  const [inView, setInView] = useState(false);
  const divRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting); // Detect if the div is in view
      },
      { threshold: 0.5 } // Trigger when 50% of the div is in view
    );

    if (divRef.current) {
      observer.observe(divRef.current); // Start observing the div
    }

    return () => {
      if (divRef.current) {
        observer.unobserve(divRef.current); // Clean up the observer
      }
    };
  }, []);

  return (
    <div
    key={location.key}
      ref={divRef}
      className={`relative transition-all duration-1000 ease-in-out ${
        inView ? 'w-full opacity-100' : 'w-full opacity-0'
      } bg-gradient-to-b from-color-dark to-${bg.current} rounded-md`}
    >
      {/* Content with height animation */}
      <div
        className={`flex flex-col gap-14 justify-center items-center transition-all duration-1000 ease-in-out ${
          inView
            ? 'h-96 opacity-100 visibility-visible delay-500'
            : 'h-0 opacity-0 visibility-hidden'
        }`}
      >
        <h1 className="text-white text-3xl font-bold text-center">
        Let’s create a measurable
        impact on your business.
        </h1>

        {/* Hoverable link with animated background color */}
        <a
          href="#"
          className="relative overflow-hidden bg-white p-2 font-bold text-2xl rounded-md group"
        >
          Design A Quote
          {/* The span used to animate background color */}
          <span className="absolute inset-0 bg-black transform scale-y-0 group-hover:scale-y-100 origin-bottom transition-all duration-500 ease-in-out"></span>
          {/* Text inside the link */}
          <span
            className={`absolute inset-0 flex justify-center items-center text-2xl font-bold text-black group-hover:text-white transition-all duration-500 ease-in-out`}
          >
            Design A Quote
          </span>
        </a>
      </div>
    </div>
  );
};

export default QuotationSection;
