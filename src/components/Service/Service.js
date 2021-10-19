import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = (props) => {
  const { name, topic, instructor, price, backgroundImg, _id } = props.service;
  const redirectUrl = `/service/${_id}`;

  return (
    <div>
      <div class="text-white bg-gradient-to-l from-black to-gray-600   shadow-xl my-5 container mx-auto rounded-xl">
        <div class="container flex flex-col items-center px-5 py-16 mx-auto md:flex-row lg:px-28">
          <div class="flex flex-col items-start mb-16 text-left lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:mb-0">
            <h2 class="mb-8 text-xl font-semibold tracking-widest  uppercase ">
              {' '}
              {topic}{' '}
            </h2>
            <h1 class="mb-8 text-2xl font-black tracking-tighter text-green-500 md:text-5xl title-font">
              {name}{' '}
            </h1>
            <p class="mb-8 text-4xl capitalize font-bold leading-relaxed text-left  ">
              <span className="text-2xl text-green-400">with</span> {instructor}
            </p>
            <Link to={redirectUrl}>
              <div class="flex flex-col justify-center lg:flex-row">
                <button class="flex items-center px-6 py-2 mt-auto font-semibold text-white transition duration-500 ease-in-out transform bg-green-600 rounded-lg  focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">
                  {' '}
                  Details{' '}
                </button>
              </div>
            </Link>
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
