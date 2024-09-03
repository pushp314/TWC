const Hero = () => {
  return (
    <section className="relative bg-gray-100 py-12">
      {/* <div className="bg-gray-200 w-full h-96 flex items-center justify-center mb-8">
            <span className="text-gray-400 text-2xl">Image Placeholder</span>
          </div> */}
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 flex justify-center md:justify-start">
          <div className="text-center md:text-left">
            <p className="text-2xl px-6 md:text-4xl font-bold text-gray-900">
              Creating <br/> Unforgettable Events <br/> That Last a Lifetime
            </p>
            {/* <hr className="border-t-2 border-red-500 w-24 mt-2 mx- md:mx-0" /> */}
          </div>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <p className="text-lg md:text-xl text-gray-700">
            Welcome to our event planning firm, where we turn your dreams into reality. 
            With our expertise and attention to detail, we ensure every event is a memorable experience.
          </p>
          <div className="mt-6 flex justify-center md:justify-start gap-4">
            <a className="bg-gray-900 text-white px-6 py-2 text-lg transition" href="#">
              Learn More
            </a>
            <a className="border border-gray-400 text-gray-800 px-6 py-2 text-lg transition" href="#">
              Sign up
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
