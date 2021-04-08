import Link from 'next/link';

import Swiper from 'react-id-swiper';
import 'swiper/swiper-bundle.css';
import SwiperCore, { Autoplay, Pagination } from 'swiper';
SwiperCore.use([ Autoplay, Pagination ]);

import { Container } from 'react-bootstrap';

import image1 from '../public/slider/image1.jpg';
import image2 from '../public/slider/image2.jpg';
import image3 from '../public/slider/image3.jpg';


// swiper slider configuration

const SliderConfigs = {
  containerClass: 'swiper-container hero-slide',
  loop: false,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
    stopOnLastSlide: true
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  centeredSlides: true,
  grabCursor: false,
  speed: 1500,
  spaceBetween: 0,
  effect: 'slide',
  noSwiping: true
};

// slider component
const Slider = () => {
  return (
    <Swiper {...SliderConfigs}>
      <div className="slide-block">
        <div className="overlay"></div>
        <div className="slide-image" style={{ backgroundImage: `url(${image1})` }} />
        <div className="content-block">
          <div className="slide-content">
            <Container>
                <div className="slide-text">
                  <h1>Welcome to</h1>
                  <h2>Indian Lounge</h2>
                  <p>Indian Restaurant &amp; Takeaway</p>
                </div>   
                <div className="mt-40 m-center">
                <Link href="https://backoffice.chefonline.co.uk/draft/indian-lounge-kings-cross-london-wc1x/menu"><a className="btn custom-btn" target="_blank">Order Online</a></Link>
                <Link href="https://backoffice.chefonline.co.uk/draft/indian-lounge-kings-cross-london-wc1x/reservations"><a className="btn custom-btn no-margin-right" target="_blank">Reservation</a></Link>
              </div>                 
              </Container>                
          </div>  
        </div>
      </div>
      <div className="slide-block">
        <div className="overlay"></div>
        <div className="slide-image" style={{ backgroundImage: `url(${image2})` }} />
        <div className="content-block">
          <div className="slide-content">
            <Container>
                <div className="slide-text">
                  <h1>Welcome to</h1>
                  <h2>Indian Lounge</h2>
                  <p>Indian Restaurant &amp; Takeaway</p>
                </div> 
                <div className="mt-40 m-center">
                <Link href="https://backoffice.chefonline.co.uk/draft/indian-lounge-kings-cross-london-wc1x/menu"><a className="btn custom-btn" target="_blank">Order Online</a></Link>
                <Link href="https://backoffice.chefonline.co.uk/draft/indian-lounge-kings-cross-london-wc1x/reservations"><a className="btn custom-btn no-margin-right" target="_blank">Reservation</a></Link>
              </div>                   
              </Container>              
          </div>  
        </div>
      </div>
      <div className="slide-block">
        <div className="overlay"></div>
        <div className="slide-image" style={{ backgroundImage: `url(${image3})` }} />
        <div className="content-block">
          <div className="slide-content">
            <Container>
              <div className="slide-text">
                <h1>Welcome to</h1>
                <h2>Sajna Restaurant</h2>
                <p>Indian Restaurant &amp; Takeaway</p>
              </div>
              <div className="mt-40 m-center">
                <Link href="https://backoffice.chefonline.co.uk/draft/indian-lounge-kings-cross-london-wc1x/menu"><a id="fifth" className="btn custom-btn" target="_blank">Order Online</a></Link>
                <Link href="https://backoffice.chefonline.co.uk/draft/indian-lounge-kings-cross-london-wc1x/reservations"><a className="btn custom-btn no-margin-right" target="_blank">Reservation</a></Link>
              </div>   
            </Container>           
          </div>  
        </div>
      </div>
    </Swiper>
  );
};

export default Slider;