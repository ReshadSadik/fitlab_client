import React, { useState } from 'react';
import Banner from '../Banner/Banner';
import HomeCard from '../HomeCard/HomeCard';
import useItems from '../hooks/useItems';
import Slideshow from '../Slider/Slider';
import CTA from './CTA/CTA';
import './Home.css';
import Testimonial from './Testimonial/Testimonial';

const Home = () => {
  const [services] = useItems();
  const homeBannerImg = '../../images/home-bg.png';
  const slideShow = (
    <div>
      <Slideshow></Slideshow>
    </div>
  );
  const bannerText = (
    <div>
      <div
        class="xl:my-4 my-0  text-white md:text-5xl
             text-xl italic font-bold text-center md:text-left slide-in-bottom-h1"
      >
        <h1 className="text-center mt-0 md:mt-20 font-mono uppercase">
          make
          <span className=" ml-5 font-bold text-green-500 md:text-7xl  text-4xl uppercase">
            fitness
          </span>
          <br />
          your favourite habit!
        </h1>
      </div>
      <p class="leading-normal text-base md:text-xl mb-8 text-center text-green-400 mt-10 ml-10 md:text-left slide-in-bottom-subtitle ">
        We are here to guide your through your future journey!
      </p>
    </div>
  );

  return (
    <div>
      <Banner
        bannerImg={homeBannerImg}
        bannerText={bannerText}
        slideShow={slideShow}
      >
        {' '}
      </Banner>

      {services.length ? (
        <div className="home-services pt-0 mt-0  container mx-auto">
          <div className="xl:pt-10 pt-0  text-center flex justify-center">
            <HomeCard service={services[0]}></HomeCard>
          </div>
          <div className=" text-center flex justify-center">
            <HomeCard service={services[1]}></HomeCard>
          </div>
          <div className=" xl:pt-10 pt-0 text-center flex justify-center  ">
            <HomeCard service={services[2]}></HomeCard>
          </div>
          <div className=" text-center flex justify-center ">
            <HomeCard service={services[3]}></HomeCard>
          </div>
          <div className=" text-center flex justify-center ">
            <HomeCard service={services[4]}></HomeCard>
          </div>
          <div className=" text-center flex justify-center ">
            <HomeCard service={services[5]}></HomeCard>
          </div>
        </div>
      ) : (
        <div class=" flex justify-center items-center">
          <div class="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
        </div>
      )}
      <Testimonial></Testimonial>
      <CTA></CTA>
    </div>
  );
};

export default Home;
