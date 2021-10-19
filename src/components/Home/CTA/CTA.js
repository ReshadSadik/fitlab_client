import React from 'react';
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <div>
      <div class="bg-gray-50">
        <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span class="block">Ready to dive in?</span>
            <span class="block text-green-600">
              Start your free trial today.
            </span>
          </h2>
          <div class="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div class="inline-flex rounded-md shadow">
              <Link
                to="/login"
                class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
              >
                Get started
              </Link>
            </div>
            <div class="ml-3 inline-flex rounded-md shadow">
              <Link
                to="/login"
                class="inline-flex items-center justify-center px-5 py-3 border-green-500 border-2 text-base font-medium rounded-md text-green-600 bg-white hover:bg-indigo-50"
              >
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
