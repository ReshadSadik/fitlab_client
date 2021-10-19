import React from 'react';
import './Banner.css';

const Banner = (props) => {
  const { bannerText } = props;
  const { bannerImg } = props;
  const { slideShow } = props;
  console.log(bannerImg);
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(99,99,99,0.40940126050420167) 0%, rgba(0,0,0,0.7539390756302521) 100%, rgba(0,0,0,1) 100%),url(${bannerImg})`,
      }}
      className="banner"
    >
      <div class="container py-15 px-6 mx-auto flex flex-wrap items-center   justify-center">
        {/* image carousel slider start */}
        <div class="flex flex-col w-full xl:w-2/5 justify-center lg:items-start  overflow-y-hidden  ">
          {slideShow}
        </div>
        {/* image carousel slider end */}
        {bannerText}
      </div>
    </div>
  );
};

export default Banner;
