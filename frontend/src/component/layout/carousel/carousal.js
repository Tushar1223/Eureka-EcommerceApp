import { useState } from 'react';
import "./crosel.css"
import Carousel from 'react-bootstrap/Carousel';
import playStore from "../../../images/horizontal-sale-banner-template_23-2148897328.jpg";
import im2 from "../../../images/car1.jpg";
import im3 from "../../../images/car3.jpg";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className='carosel'>
      <Carousel 
        activeIndex={index} 
        onSelect={handleSelect} 
        interval={2000} // Transition speed set to 2 seconds
        controls={false} // Optionally disable controls for autoplay effect
      >
        <Carousel.Item>
          <img className='carosel_image' src={playStore} alt="playstore" />
        </Carousel.Item>
        <Carousel.Item>
          <img className='carosel_image' src={im2} alt="car1" />
        </Carousel.Item>
        <Carousel.Item>
          <img className='carosel_image' src={im3} alt="car3" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default ControlledCarousel;
