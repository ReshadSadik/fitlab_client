import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../components/hooks/useAuth';
import { BsFillEyeSlashFill } from 'react-icons/bs';

const Login = () => {
  const { getLoginEmailPassword, googleSignIn, users, error, setError } =
    useAuth();
  useEffect(() => {
    setError('');
  }, []);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const newError = error.slice(22, 50);
  const getLoginEmailValue = (e) => {
    setEmail(e.target.value);
  };
  const getLoginPasswordValue = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div>
      <Link to="/login">
        <div className=" xl:mt-20 mt-10  flex items-center">
          <div className=" xl:w-1/4 h-1/4   mx-auto ">
            <Link to="/home">
              <div className="text-white font-bold border-2 rounded bg-green-500 text-center w-10 ml-auto">
                X
              </div>
            </Link>
            <div className="p-12">
              <p className="xl:text-5xl text-3xl text-center pt-10 text-green-600 font-bold">
                Welcome Back
              </p>
              <div>
                <h2>{users.email}</h2>
              </div>
              <p className="text-xl py-3 text-center text-gray-400 font-semibold">
                Sign in to continue
              </p>
            </div>
            <form action="">
              <div className="mx-12 p-3 pb-10 rounded-xl shadow-sm bg-gray-100">
                <div className="p-3 mx-6 border-b border-gray-500">
                  <input
                    required
                    onBlur={getLoginEmailValue}
                    placeholder="Email"
                    className="bg-transparent text-green-700 w-full focus:outline-none focus:rang"
                    type="email"
                  />
                </div>

                <div className="p-3 mx-6 flex border-b border-gray-500">
                  <input
                    required
                    onBlur={getLoginPasswordValue}
                    placeholder="Password"
                    className="bg-transparent text-green-700 focus:outline-none focus:rang w-full"
                    type="password"
                  />
                  <div className="w-auto text-green-600">
                    {' '}
                    <BsFillEyeSlashFill></BsFillEyeSlashFill>
                  </div>
                </div>

                <h2 className="text-red-500">{newError}</h2>
              </div>
              <div className="mx-12 p-3 justify-between flex">
                <div className="flex">
                  <div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
                    <input
                      type="checkbox"
                      name="toggle"
                      id="toggle"
                      className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-gray-800 border-4 appearance-none cursor-pointer"
                    />
                    <label
                      htmlFor="toggle"
                      className="toggle-label block overflow-hidden h-6 rounded-full bg-green-600 cursor-pointer"
                    ></label>
                  </div>
                  <label
                    htmlFor="toggle"
                    className="text-xs text-gray-500 font-bold mt-1"
                  >
                    remeber me
                  </label>
                </div>
                <div className="bg mt-1 text-xs text-gray-500 font-bold">
                  <a href="/">forget password?</a>
                </div>
              </div>
              <div className="w-full xl:p-12 p-5 mx-auto">
                <button
                  type="submit"
                  onClick={() => {
                    getLoginEmailPassword(email, password);
                  }}
                  className=" bg-green-600 xl:p-3 p-1 rounded-3xl w-1/2 h-full text-white font-semibold hover:bg-green-600 cursor-pointer"
                >
                  {' '}
                  Login
                </button>

                <p className="mx-auto text-center mt-3 text-gray-400">
                  don't have an account?
                  <Link
                    to="/register"
                    className="text-lg mx-2 text-black font-semibold"
                  >
                    Sign up
                  </Link>{' '}
                </p>
                <div className="flex mt-5 mx-auto text-center">
                  <button
                    onClick={googleSignIn}
                    className="bg-green-600 mx-5   xl:px-5 px-3 rounded-3xl  h-8 xl:h-10 text-white font-semibold text-sm hover:bg-green-500 mb-5"
                  >
                    google sign in
                  </button>
                  <button className="bg-green-600 mx-5  text-sm  rounded-3xl xl:px-5 px-3 h-8 xl:h-10 text-white font-semibold hover:bg-green-500 cursor-pointer">
                    facebook sign in
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Login;
