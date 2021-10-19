import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import './Header.css';
import logo from '../../images/running.png';

const Header = () => {
  const { users, signOutUser } = useAuth();
  return (
    <div>
      <div class="  font-sans leading-normal tracking-normal">
        <nav
          style={{
            background: `linear-gradient(360deg, rgba(44,45,49,0.9612219887955182) 0%, rgba(12,102,74,0.9528186274509804) 13%, rgba(5,150,105,1) 100%)`,
          }}
          class="flex   items-center  justify-between flex-wrap  px-6 py-4  w-full z-10 top-0 "
        >
          <div class="flex items-center md:ml-40 ml-0  flex-shrink-0 text-white mr-6">
            <a
              class="text-purple-200 font-extrabold no-underline hover:text-white hover:no-underline"
              href="/"
            >
              <span class="text-2xl mx-auto text-white flex align-center">
                <img className="w-8 mr-5" src={logo} alt="" />
                FITLAB
              </span>
            </a>
          </div>

          <div class="block lg:hidden">
            <button
              onClick={toggle}
              id="nav-toggle"
              class="flex items-center bg-white px-3 py-2 border rounded text-green-600  border-white  hover:border-white"
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
                  All SERVICES
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
                {/* <Link
                  class="inline-block font-bold text-white no-underline hover:text-gray-200 hover:text-underline py-2 px-4"
                  to="/about"
                >
                  ABOUT
                </Link> */}
              </li>
            </ul>
            <div class="mx-5 ">
              <div>
                {!users.email ? (
                  <Link
                    class="inline-block font-bold text-white no-underline hover:text-gray-200 hover:text-underline bg-green-600 rounded-xl  py-2 px-4 xl:mb-0 mb-2"
                    to="/login"
                  >
                    Login
                  </Link>
                ) : (
                  <div class="inline-block font-bold text-green-600 no-underline hover:text-green-900 hover:text-underline bg-white  rounded-xl  py-2 px-4 cursor-pointer xl:mb-0 mb-2">
                    <h2>{users.displayName}</h2>
                  </div>
                )}
              </div>
            </div>
            <div class="mx-5">
              <div
                class="inline-block font-bold text-white no-underline hover:text-gray-200 hover:text-underline bg-green-600 rounded-xl xl:mr-10 mr-0 py-2 px-4 "
                to="/register"
              >
                {!users.email ? (
                  <Link
                    class="inline-block font-bold text-white no-underline hover:text-gray-200 hover:text-underline  bg-green-600 rounded-xl  "
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

const toggle = () => {
  document.getElementById('nav-content').classList.toggle('hidden');
};
