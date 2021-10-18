import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import './Header.css';

const Header = () => {
  const { users, signOutUser } = useAuth();
  return (
    <div>
      <div class="  font-sans leading-normal tracking-normal">
        <nav class="flex items-center  justify-between flex-wrap  p-6  w-full z-10 top-0 ">
          <div class="flex items-center md:ml-40 ml-0  flex-shrink-0 text-white mr-6">
            <a
              class="text-purple-200 font-extrabold no-underline hover:text-white hover:no-underline"
              href="/"
            >
              <span class="text-2xl mx-auto text-white flex align-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-10"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
                </svg>
                THE FUTURE WORKSHOP
              </span>
            </a>
          </div>

          <div class="block lg:hidden">
            <button
              id="nav-toggle"
              class="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white"
            >
              <svg
                class="fill-current h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>

          <div
            class="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block pt-6 lg:pt-0"
            id="nav-content"
          >
            <ul class="list-reset lg:flex justify-center flex-1 items-center">
              <li class="mr-3">
                <Link
                  class="inline-block font-bold  py-2 px-4 text-white "
                  to="/home"
                >
                  HOME
                </Link>
              </li>
              <li class="mr-3">
                <Link
                  class="inline-block font-bold text-white   py-2 px-4"
                  to="/services"
                >
                  SERVICES
                </Link>
              </li>
              <li class="mr-3">
                <Link
                  class="inline-block font-bold text-white no-underline hover:text-gray-200 hover:text-underline py-2 px-4"
                  to="/contact"
                >
                  CONTACT
                </Link>
              </li>
              <li class="mr-3">
                <Link
                  class="inline-block font-bold text-white no-underline hover:text-gray-200 hover:text-underline py-2 px-4"
                  to="/about"
                >
                  ABOUT
                </Link>
              </li>
            </ul>
            <div class="mx-5 ">
              <div>
                {!users.email ? (
                  <Link
                    class="inline-block font-bold text-white no-underline hover:text-gray-200 hover:text-underline bg-green-600 rounded-xl  py-2 px-4"
                    to="/login"
                  >
                    Login
                  </Link>
                ) : (
                  <div class="inline-block font-bold text-green-600 no-underline hover:text-green-900 hover:text-underline bg-white rounded-xl  py-2 px-4 cursor-pointer">
                    <h2>{users.displayName}</h2>
                  </div>
                )}
              </div>
            </div>
            <div class="mx-5">
              <div
                class="inline-block font-bold text-white no-underline hover:text-gray-200 hover:text-underline bg-green-600 rounded-xl mr-10  py-2 px-4 "
                to="/register"
              >
                {!users.email ? (
                  <Link
                    class="inline-block font-bold text-white no-underline hover:text-gray-200 hover:text-underline bg-green-600 rounded-xl  "
                    to="/register"
                  >
                    <div>Sign up</div>
                  </Link>
                ) : (
                  <div onClick={signOutUser}>
                    <div class="inline-block font-bold text-white no-underline hover:text-gray-200 hover:text-underline bg-green-600 rounded-xl  cursor-pointer">
                      Log Out
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
