import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (

    <nav className="border-gray-200 px-4 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <a className="text-lg font-semibold" href="#">TWC</a>
        <button 
          className="text-gray-800 md:hidden focus:outline-none" 
          onClick={() => setIsOpen(!isOpen)}
        >
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
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
        <div className={`md:flex md:items-center ${isOpen ? 'block' : 'hidden'} w-full md:w-auto`}>
          <ul className="flex flex-col md:flex-row md:gap-4 gap-2 mt-2 md:mt-0">
            <li>
              <a className="block text-gray-800" href="#">About Us</a>
            </li>
            <li>
              <a className="block text-gray-800" href="#">Services</a>
            </li>
            <li>
              <a className="block text-gray-800" href="#">Events</a>
            </li>
            <li className="relative">
              <button 
                className="block text-gray-800 md:inline-flex focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
              >
                More
              </button>
              <ul className="absolute bg-white shadow-lg rounded-lg mt-2 py-2 w-40 hidden group-hover:block">
                <li><a className="block px-4 py-2 text-gray-800 hover:bg-gray-200" href="#">Action</a></li>
                <li><a className="block px-4 py-2 text-gray-800 hover:bg-gray-200" href="#">Another action</a></li>
                <li><hr className="border-gray-300" /></li>
                <li><a className="block px-4 py-2 text-gray-800 hover:bg-gray-200" href="#">Something else here</a></li>
              </ul>
            </li>
            <li>
              <a className="px-4 py-2 border border-black  hover:bg-black hover:text-white hover:duration-1000	 md:ml-4" href="#">Contact Us</a>
            </li>
            {/* <li>
              <a className="px-4 py-2 bg-black text-white  hover:bg-gray-800 md:mt-0 md:ml-4" href="#">Login</a>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
