// import webflow from '../assets/weflow.webp'

const TestimonialSlider = () => {
  return (
    <div className="w-full mx-auto py-12 px-8 relative">
      <div className="flex justify-center mb-4">
        {/* Star Ratings */}
        <div className="flex items-center">
          {[...Array(5)].map((_, index) => (
            <svg
              key={index}
              className="w-6 h-6 text-black-400 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          ))}
        </div>
      </div>
      
      {/* Testimonial Text */}
      <p className="text-center text-lg font-semibold mb-6">
        Our event planner firm exceeded all our expectations. The team was professional, organized, and created a memorable experience for our guests.
      </p>
      
      {/* Client Info */}
      <div className="flex items-center justify-center space-x-4">
        {/* Placeholder for client image */}
        <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
        {/* <div>
          <p className="font-bold">John Doe</p>
          <p className="text-gray-600">Event Coordinator, ABC Company</p>
        </div> */}
        {/* Placeholder for Webflow logo */}
        {/* <div className="ml-6 border-l-2 border-black">
          <img src={webflow} alt="Webflow" className="h-6" />
        </div> */}
      </div>

      {/* Navigation Arrows */}
      <div className="absolute inset-y-0 left-0 flex items-center">
        <button className="p-2 text-gray-500 hover:text-black">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
        </button>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center">
        <button className="p-2 text-gray-500 hover:text-black">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default TestimonialSlider;
