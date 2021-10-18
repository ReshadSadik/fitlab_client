import Banner from '../Banner/Banner';
import useItems from '../hooks/useItems';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
  const [services] = useItems();
  const homeBannerImg = '../../images/banner-bg-2.jpg';
  const bannerText = (
    <div
      class="my-4 xl:mt-40 xl:mr-96 mt-80  mr-0   text-white md:text-5xl
             text-2xl italic font-bold text-center md:text-left slide-in-bottom-h1"
    >
      <h1 className="text-center mt-0 md:mt-20 font-mono uppercase">
        Excuses dont get you <br />
        <span className=" ml-5 font-bold text-green-500 md:text-7xl  text-6xl uppercase">
          RESULTS!
        </span>
      </h1>
    </div>
  );
  const bannerStyle = {};
  return (
    <div>
      <Banner bannerImg={homeBannerImg} bannerText={bannerText}>
        {' '}
      </Banner>
      <div className="services ">
        {services.map((service) => (
          <Service service={service}> </Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
