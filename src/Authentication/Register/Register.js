import React, { useEffect, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../components/hooks/useAuth';
import { BsFillEyeSlashFill } from 'react-icons/bs';

const Register = () => {
  let history = useHistory();
  let location = useLocation();
  const redirectUrl = '/';
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const { getRegisterEmailPassword, googleSignIn, error, users, setError } =
    useAuth();
  useEffect(() => {
    setError('');
  }, []);
  // const newError = error.slice(22, 50);

  const handleGoogleRedirect = () => {
    googleSignIn().then((result) => {
      history.push(redirectUrl);
    });
  };

  const getRegisterEmailValue = (e) => {
    setEmail(e.target.value);
  };
  const getRegisterPasswordValue = (e) => {
    setPassword(e.target.value);
  };
  const getRegisterNameValue = (e) => {
    setDisplayName(e.target.value);
  };
  const handleRegister = (email, password, displayName) => {
    getRegisterEmailPassword(email, password, displayName).then(
      (userCredential) => {
        // userCredential?.user ? history.push(redirectUrl) : <div></div>;
        // history.push(redirectUrl);
        users.email && history.push('/');
      }
    );
  };
  return (
    <div>
      <Link to="/register">
        <div className=" mt-0 flex shadow-lg items-center">
          <div className=" xl:w-1/3 h-1/4   mx-auto   m-10">
            <Link to="/home">
              <div className="text-white font-bold text-center bg-green-600 border-2 w-10 ml-auto">
                X
              </div>
            </Link>
            <div className="xl:p-12 p-5">
              <p className="xl:text-5xl text-3xl text-center pt-0 text-green-600 font-bold">
                Registration Form
              </p>
              <p className="text-xl text-center py-3 text-gray-400 font-semibold">
                Sign up Now
              </p>
            </div>
            <form action="">
              <div className="mx-5 p-3 pb-10 rounded-xl  ">
                <div className="p-3 mx-6 border-b border-gray-500">
                  <input
                    onBlur={getRegisterNameValue}
                    placeholder="Full Name"
                    className="bg-transparent text-green-600 w-full focus:outline-none focus:rang"
                    type="text"
                  />
                </div>

                <div className="p-3 mx-6 border-b border-gray-500">
                  <input
                    onBlur={getRegisterEmailValue}
                    placeholder="Email"
                    className="bg-transparent text-green-600 w-full focus:outline-none focus:rang"
                    type="email"
                  />
                </div>
                <div className="p-3 mx-6 border-b border-gray-500">
                  <input
                    placeholder="Phone Number"
                    className="bg-transparent text-green-600 w-full focus:outline-none focus:rang"
                    type="tel"
                  />
                </div>

                <div className="p-3 mx-6 flex border-b border-gray-500">
                  <input
                    onBlur={getRegisterPasswordValue}
                    placeholder="Password"
                    className="bg-transparent text-green-600 focus:outline-none focus:rang w-full"
                    type="password"
                  />
                  <div className="w-auto text-green-600">
                    <BsFillEyeSlashFill></BsFillEyeSlashFill>
                  </div>
                </div>
                <div className="p-3 mx-6 flex border-b border-gray-500">
                  <input
                    placeholder="Confirm Password"
                    className="bg-transparent text-green-600 focus:outline-none focus:rang w-full"
                    type="password"
                  />
                  <div className="w-auto text-green-600">
                    <BsFillEyeSlashFill></BsFillEyeSlashFill>
                  </div>
                </div>
                <h2 className="text-red-500">{error}</h2>
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
                      className="toggle-label block overflow-hidden h-6 rounded-full bg-green-500 cursor-pointer"
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
              <input
                onClick={() => {
                  handleRegister(email, password, displayName);
                }}
                className=" bg-green-600 text-white font-semibold  xl:p-3 p-1 rounded-3xl w-1/2 h-full "
                type="submit"
                value="Submit"
              />
            </form>
            <div className="w-full ">
              {/* <button className=" bg-yellow-500 xl:p-3 p-1 rounded-3xl w-full h-full hover:bg-yellow-600">
                {' '}
                Sign up
              </button> */}
              <p className="mx-auto text-center mt-3 text-gray-400">
                already have an account?{' '}
                <Link
                  to="/login"
                  className="text-lg mx-2 text-black font-semibold"
                >
                  Log In
                </Link>{' '}
              </p>
              <div className="flex mt-5 justify-center">
                <button
                  onClick={handleGoogleRedirect}
                  className="bg-green-600 text-white font-semibold xl:mx-5 mx-1   xl:px-5 px-3 rounded-3xl  h-8 xl:h-10 text-sm  mb-5"
                >
                  google sign up
                </button>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Register;
