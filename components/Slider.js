// importing next -link
import Link from 'next/link';

// importing swiper 
import Swiper from 'react-id-swiper';
import 'swiper/swiper-bundle.css';
import SwiperCore, { Autoplay, Pagination } from 'swiper';
SwiperCore.use([ Autoplay, Pagination ]);

// importing classes - react bootstrap
import { Container } from 'react-bootstrap';

// importing images
import image1 from '../slider/image1.jpg';
import image2 from '../slider/image2.jpg';
import image3 from '../slider/image3.jpg';


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
                  <h2>Sajna Spice</h2>
                  <p>Indian Restaurant &amp; Takeaway</p>
                </div>   
                <div className="mt-40 m-center">
                <Link href="#"><a className="custom-btn" target="_blank">Order Online</a></Link>
                <Link href="#"><a className="custom-btn no-margin-right" target="_blank">Reservation</a></Link>
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
                  <h2>Sajna Spice</h2>
                  <p>Indian Restaurant &amp; Takeaway</p>
                </div> 
                <div className="mt-40 m-center">
                <Link href="#"><a className="custom-btn" target="_blank">Order Online</a></Link>
                <Link href="#"><a className="custom-btn no-margin-right" target="_blank">Reservation</a></Link>
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
                <Link href="#"><a id="fifth" className="custom-btn" target="_blank">Order Online</a></Link>
                <Link href="#"><a className="custom-btn no-margin-right" target="_blank">Reservation</a></Link>
              </div>   
            </Container>           
          </div>  
        </div>
      </div>
    </Swiper>
  );
};

export default Slider;