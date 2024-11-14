import React, { useState, useRef, useEffect } from 'react';

const LazyLoadGif = ({ src, alt }) => {
  const [isInView, setIsInView] = useState(false);
  const gifRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true); // Load the GIF when it enters the viewport
        } else {
          setIsInView(false); // Reset the state when it goes out of the viewport
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the GIF is in the viewport
    );

    if (gifRef.current) {
      observer.observe(gifRef.current);
    }

    return () => {
      if (gifRef.current) {
        observer.disconnect(); // Cleanup observer when component unmounts
      }
    };
  }, []);

  return (
    <div ref={gifRef}>
      {isInView ? <img className='w-full z-0' src={src} alt={alt} /> : <div>Loading...</div>}
    </div>
  );
};

export default LazyLoadGif;
