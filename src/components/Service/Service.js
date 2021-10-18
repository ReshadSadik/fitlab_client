import React from 'react';
import './Service.css';

const Service = (props) => {
  const { name, topic, instructor, img, price, backgroundImg } = props.service;
  return (
    <div>
      <div class="text-white bg-gradient-to-l from-black to-gray-600   shadow-xl my-5 container mx-auto rounded-xl">
        <div class="container flex flex-col items-center px-5 py-16 mx-auto md:flex-row lg:px-28">
          <div class="flex flex-col items-start mb-16 text-left lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:mb-0">
            <h2 class="mb-8 text-xs font-semibold tracking-widest  uppercase title-font">
              {' '}
              {topic}{' '}
            </h2>
            <h1 class="mb-8 text-2xl font-black tracking-tighter text-green-600 md:text-5xl title-font">
              {' '}
              {name}{' '}
            </h1>
            <p class="mb-8 text-base leading-relaxed text-left  ">
              {' '}
              Deploy your mvp in minutes, not days. WT offers you a a wide
              selection swapable sections for your landing page.{' '}
            </p>
            <div class="flex flex-col justify-center lg:flex-row">
              <button class="flex items-center px-6 py-2 mt-auto font-semibold text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-lg hover:bg-blue-700 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">
                {' '}
                Show me{' '}
              </button>
              {/* <p class="mt-2 text-sm text-left text-blueGray-600 md:ml-6 md:mt-0"> It will take you to candy shop. <br class="hidden lg:block">
                <a  class="inline-flex items-center font-semibold text-blue-600 md:mb-2 lg:mb-0 hover:text-black " title="read more"> Read more about it » </a>
                </p> */}
            </div>
          </div>
          <div class="w-full lg:w-1/3 lg:max-w-lg  md:w-1/2">
            <img
              class="object-cover xl:h-80 xl:w-96 h-40 w-96  object-center rounded-lg "
              alt=""
              src={backgroundImg}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
