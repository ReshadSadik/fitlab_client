import React from 'react';

const Footer = () => {
  return (
    <div>
      <footer className="text-white body-font bg-green-600">
        <div className="container px-5 py-20 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className=" flex-shrink-0 md:mx-0 mx-auto  text-center md:text-left">
            <a
              href="/"
              className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900 mt-10"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-10"
                viewBox="0 0 20 20"
                fill="white"
              >
                <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
              </svg>
              <span className="ml-3 text-xl text-white">
                THE FUTURE WORKSHOP
              </span>
            </a>
          </div>
          <div className="flex-grow flex justify-center flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10  text-center ">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font text-purple-200 font-extrabold tracking-widest text-sm mb-3">
                HOME
              </h2>
              <nav className="list-none mb-10">
                <li className="mt-2">
                  <a href="/" className="text-white hover:text-purple-200">
                    Our Motto
                  </a>
                </li>
                <li className="mt-2">
                  <a href="/" className="text-white hover:text-purple-200">
                    Services
                  </a>
                </li>
                <li className="mt-2">
                  <a href="/" className="text-white hover:text-purple-200">
                    Portfolio works
                  </a>
                </li>
                <li className="mt-2">
                  <a href="/" className="text-white  hover:text-purple-200">
                    Trainers
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font text-purple-200 font-extrabold tracking-widest text-sm mb-3">
                SERVICES
              </h2>
              <nav className="list-none mb-10">
                <li className="mt-2">
                  <a href="/" className="text-white hover:text-purple-200">
                    Full support
                  </a>
                </li>
                <li className="mt-2">
                  <a href="/" className="text-white hover:text-purple-200">
                    24 Hours Services
                  </a>
                </li>
                <li className="mt-2">
                  <a href="/" className="text-white hover:text-purple-200">
                    Regular Tests
                  </a>
                </li>
                <li className="mt-2">
                  <a href="/" className="text-white hover:text-purple-200">
                    Final Certificate
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font text-purple-200 font-extrabold tracking-widest text-sm mb-3">
                ABOUT US
              </h2>
              <nav className="list-none mb-10">
                <li className="mt-2">
                  <a href="/" className="text-white hover:text-purple-200">
                    Contact Us
                  </a>
                </li>
                <li className="mt-2">
                  <a href="/" className="text-white hover:text-purple-200">
                    Set a Meeting
                  </a>
                </li>

                <li className="mt-2">
                  <a href="/" className="text-white hover:text-purple-200">
                    Learn More
                  </a>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className="bg-green-700">
          <div className="container mx-auto text-center  py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-white font-bold text-sm mx-auto ">
              © 2021 FUTURE WORKSHOP —
              <a href="/" className="text-white ml-1" target="_blank">
                @Reshad
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
