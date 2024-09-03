import img from '../assets/imgevent 4.jpg'
const Dream = () => {
  return (
    <>
    <div className="p-6 bg-white w-100">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <h1 className="text-3xl font-bold mb-4">Transform Your Dream Event Today</h1>
          <p className="text-gray-600 mb-6">
            Let our expert event planners create a memorable experience for you.
          </p>
          <div className="space-x-4">
            <button className="bg-black text-white px-6 py-2 rounded">
              Contact
            </button>
            <button className="bg-white text-black border border-black px-6 py-2 rounded">
              Request
            </button>
          </div>
        </div>
        <div className="md:w-1/2">
          <div className="bg-gray-200 w-full h-64 rounded-lg flex items-center justify-center">
            <img
              className="w-[100vh] h-[45vh] text-gray-400"
              src={img}
            />
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Dream