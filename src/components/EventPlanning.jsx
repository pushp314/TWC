/* eslint-disable react/no-unescaped-entities */
const EventPlanning = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-lg text-gray-500 font-semibold">Unforgettable</h2>
        <h1 className="text-4xl font-bold mb-4">Creating Memorable Experiences for Every Occasion</h1>
        <p className="text-gray-700 max-w-3xl mx-auto">
          At our event planning firm, we specialize in creating unforgettable experiences for a variety of occasions. 
          From birthday parties to weddings and corporate events, we have the expertise and creativity to make your 
          event truly special. Our team of dedicated professionals will work closely with you to understand your vision 
          and bring it to life. With our attention to detail and commitment to excellence, you can trust us to handle 
          every aspect of your event, leaving you free to enjoy the celebration.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        <div className="text-center">
          <div className="bg-gray-100 p-6 rounded-lg">
            <div className="text-3xl mb-4">🎉</div>
            <h3 className="text-xl font-bold mb-2">Birthday Parties</h3>
            <p className="text-gray-600">
              Let us plan the perfect birthday party for you or your loved ones. From themed decorations to fun activities, 
              we`ll create a memorable celebration.
            </p>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-gray-100 p-6 rounded-lg">
            <div className="text-3xl mb-4">💍</div>
            <h3 className="text-xl font-bold mb-2">Weddings</h3>
            <p className="text-gray-600">
              Make your dream wedding a reality with our expert wedding planning services. We'll take care of every detail, 
              ensuring a flawless and magical day.
            </p>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-gray-100 p-6 rounded-lg">
            <div className="text-3xl mb-4">🏢</div>
            <h3 className="text-xl font-bold mb-2">Corporate Events</h3>
            <p className="text-gray-600">
              Impress your clients and colleagues with our professional corporate event planning. From conferences to 
              product launches, we'll make it a success.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <button className="bg-gray-900 text-white px-6 py-2 mr-4 ">Learn More</button>
        <button className="bg-transparent border border-gray-900 text-gray-900 px-6 py-2 ">Contact</button>
      </div>
    </div>
  );
};

export default EventPlanning;
