// layout persistent library
import { withLayout } from '@moxy/next-layout';

import React, { useState } from 'react';
import FsLightbox from 'fslightbox-react';

// importing classes - react bootstrap
import { Col, Container, Row } from 'react-bootstrap';

// importing custom layout
import CustomLayout from '../components/layout/CustomLayout';

const Gallery = () => {
  
 
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1
  });
    
    function openLightboxOnSlide(number) {
      setLightboxController({
        toggler: !lightboxController.toggler,
        slide: number
      });
    }

    const photos = [
      './gallery/1.jpg',
      './gallery/2.jpg',
      './gallery/3.jpg',
      './gallery/4.jpg',
      './gallery/5.jpg',
      './gallery/6.jpg',
      './gallery/7.jpg'
    ];

    const styling = {
      objectFit: 'cover',
  }

    return (
      <>
      <div className="inner-banner">
          <div className="banner-overlay"></div>
          <Container>
              <Row>
                  <Col xs={12}>
                      <div className="text-center">
                          <h1 className="banner-headline">Gallery</h1>
                      </div>
                  </Col>
              </Row>
          </Container>
      </div>      
      <div className="gallery section-pad">
        <Container>
          <Row>
            <Col md={12}>
              <div className="gallery-grid grid">
                {
                  photos.map((elem, ind) => {
                  let num = ind + 1
                  
                  return (
                      <img style={styling}
                      key={ind} 
                      src={elem} 
                      onClick={() => openLightboxOnSlide(num)} 
                      />
                      )
                  })
                }       
              </div>
            </Col>   
          </Row>
        </Container>           
  
        <FsLightbox
          toggler={ lightboxController.toggler }
          sources={ photos }
          slide={ lightboxController.slide }
        />
      </div>  
      </>
    );
}
export default withLayout(<CustomLayout />)(Gallery);