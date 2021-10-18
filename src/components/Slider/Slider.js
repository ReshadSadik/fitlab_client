import { useEffect, useRef, useState } from 'react';
import useItems from '../hooks/useItems';
import './Slider.css';

const delay = 2500;

export default function Slideshow() {
  const [services] = useItems();
  const images = services.map((service) => service.instructorImg);
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slider">
      <div className="slideshow ml-20">
        <div
          className="slideshowSlider"
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
        >
          {images.map((image, index) => (
            <div className="slide" key={index}>
              <img className={'sliderImg'} src={image} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
