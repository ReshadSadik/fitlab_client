import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchSingleServices } from '../../redux/slices/servicesslice';
import './HomeCard.css';

const HomeCard = (props) => {
  const dispatch = useDispatch();
  const { name, price, _id, topic, backgroundImg } = props.service;
  const redirectUrl = `/service/${_id}`;
  const styleSheet = {
    position: 'relative',
    backgroundImage: `url(${backgroundImg})`,
    backgroundSize: 'cover',
    zIndex: '2',
  };
  return (
    <div>
      <div
        style={styleSheet}
        className="container card   lg:w-96 md:w-80 w-64  pt-12 px-4 text-center  md:mx-5 mx-10   mb-10  shadow-lg rounded-lg"
      >
        <div className="px-4 text-white  z-50  background flex-auto">
          <div className="text-white p-3 text-center inline-flex mr-56 items-center justify-center w-20 h-12 mb-5 shadow-lg rounded-full bg-green-600">
            <i className="text-xl font-bold">${price}</i>
          </div>
          <h6 className="text-xl my-5 sm:mt-10 md:m-0 lg:mt-10  font-bold">
            {name}
          </h6>
          <p className="mt-2 font-semibold text-md  sm:block hidden mb-4 text-blueGray-500">
            {topic}
          </p>
          <Link to={redirectUrl}>
            <div onClick={() => dispatch(fetchSingleServices(_id))}>
              <button className="homeCardBtn rounded sm:text-2xl bg-green-600">
                Details
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
