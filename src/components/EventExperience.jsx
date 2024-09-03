import img from '../assets/transform.webp'

const EventExperience = () => {
  return (
    <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 text-center md:text-left">
        <div className="flex justify-center md:justify-start mb-4">
          <div className="text-5xl">🗳️</div>
        </div>
        <h1 className="text-4xl font-bold mb-4">Experience Unforgettable Events with Our Expert Planners</h1>
        <p className="text-gray-700 mb-6">
          At our event planning firm, we offer personalized service, experienced planners, and meticulous attention to detail. 
          Whether it`s a birthday party, wedding, or any other special occasion, we ensure that every event is flawlessly executed, 
          leaving you with unforgettable memories.
        </p>
        <div className="flex justify-center md:justify-start">
          <button className="bg-gray-900 text-white px-6 py-2 mr-4">Learn More</button>
          <button className="bg-transparent border border-gray-600 text-gray-600 px-6 py-2 hover:bg-gray-900 hover:text-white">
            Sign Up
          </button>
        </div>
      </div>
      <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
        <div className=" w-full h-64 md:h-96 flex items-center justify-center">
          {/* <span className="text-gray-400 text-2xl">Image Placeholder</span> */}
          <img 
            src={img}
          />
        </div>
      </div>
    </div>
  );
};

export default EventExperience;
