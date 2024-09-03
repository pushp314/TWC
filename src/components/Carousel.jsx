import { useState, useEffect } from "react";
import caroimg from "../assets/caroimg.webp";
import caroimg1 from "../assets/caroimg3.webp";
import caroimg2 from "../assets/caroimg2.webp";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [caroimg, caroimg1, caroimg2];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="w-full h-[90vh] overflow-hidden relative">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide}
            alt={`Event- ${index + 1}`}
            className="w-full h-[90vh] object-cover object-center"
          />
        </div>
      ))}
    </div>
  );
};

export default Carousel;
