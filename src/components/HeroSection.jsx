const EventHeader = () => {
  return (
    <>
      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center">
          
          <div className="text-center md:text-left md:flex md:justify-between md:items-center w-full">
            <h1 className="text-4xl font-bold mb-4 md:w-1/2">Creating <br/> Unforgettable Events <br/> That Last a Lifetime</h1>
            <p className="text-gray-700 mb-6 md:w-1/2">
              Welcome to our event planning firm, where we turn your dreams into reality. With our expertise and attention 
              to detail, we ensure every event is a memorable experience.
            </p>
          </div>
          <div className="space-x-4">
            <button className="bg-black text-white px-6 py-2 hover:bg-gray-800">Learn More</button>
            <button className="bg-transparent border border-black text-black px-6 py-2 hover:bg-black hover:text-white">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventHeader;
