// importing classes - react bootstrap
import { Col, Container, Row } from "react-bootstrap"

// import next - link
import Link from 'next/link';

import img1 from '../slider/offer1.jpg';
import img2 from '../slider/offer2.jpg';

const OfferLeft = () => {
    return (
        <div className="offer section-pad">
            <Container>
                <Row>
                    <Col md={6}>
                        <div className="offer-main custom-margin">
                            <div className="img-block">
                                <img src={img1} alt="Offer1" className="img-fluid"/>       
                                <Link href="https://backoffice.chefonline.co.uk/draft/indian-lounge-kings-cross-london-wc1x/menu"><a target="_blank" className="btn-position custom-btn" target="_blank">View Menu</a></Link>
                            </div>    
                            <div className="offer-name">
                                <h2>Order Online</h2>                                
                            </div>
                            <div className="offer-details text-center">
                                <p>Having a night in?<br/>Now you can order online</p>                                                           
                            </div>
                            <div className="box-bottom-style"></div>                               
                        </div>    
                    </Col>
                    <Col md={6}>
                        <div className="offer-main">
                            <div className="img-block">
                                <img src={img2} alt="Offer2" className="img-fluid"/>       
                                <Link href="https://backoffice.chefonline.co.uk/draft/indian-lounge-kings-cross-london-wc1x/menu"><a target="_blank" className="btn-position custom-btn" target="_blank">Order Now</a></Link>
                            </div>
                            <div className="offer-name">
                                <h2>Home Delivery</h2>
                            </div>
                            <div className="offer-details text-center">
                                <p>Free home delivery<br/>within 3 miles radius</p>
                            </div>
                            <div className="box-bottom-style"></div>
                        </div>          
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
 
export default OfferLeft;