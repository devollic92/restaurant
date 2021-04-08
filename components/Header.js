import Link from 'next/link';
import { Col, Container, Row, Navbar, Nav } from "react-bootstrap";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTripadvisor, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";


const Header = () => {

    return (
        <>
            <div className="header">
                <div className="top">
                    <Container>
                        <Row>
                        <Col xs={6} md={6}>
                            <Link href="https://www.facebook.com/indianloungekingcross/">
                            <a target="_blank"><FontAwesomeIcon className="socials facebook" icon={faFacebookF} /></a>
                            </Link>
                            <Link href="https://www.tripadvisor.com/Restaurant_Review-g186338-d3206568-Reviews-Indian_Lounge-London_England.html">
                            <a target="_blank"><FontAwesomeIcon className="socials tripadvisor" icon={faTripadvisor} /></a>
                            </Link>
                            <Link href="https://twitter.com/IndianLounge_">
                            <a target="_blank"><FontAwesomeIcon className="socials twitter" icon={faTwitter} /></a>
                            </Link>
                        </Col>
                        <Col xs={6} md={6}>
                            <div className="phone-block float-right">
                            <FontAwesomeIcon className="phone-icon" icon={faPhone} /><Link href="tel:02078378398"><a className="phone">020 7837 8398</a></Link>
                            </div>  
                        </Col>
                        </Row>
                    </Container>
                </div>
                <div className="topmenu">
                    <Container>
                        <Row>
                            <Col>
                            <Navbar collapseOnSelect expand="lg">
                            <Link href="/"><a><img src="/main-logo.png" className="img-fluid" alt="logo"/></a></Link>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="ml-auto">
                                <Link href="/" passHref><Nav.Link>Home</Nav.Link></Link>
                                <Link href="https://backoffice.chefonline.co.uk/draft/indian-lounge-kings-cross-london-wc1x/menu" passHref><Nav.Link target="_blank">Order Online</Nav.Link></Link>
                                <Link href="https://backoffice.chefonline.co.uk/draft/indian-lounge-kings-cross-london-wc1x/reservations" passHref><Nav.Link target="_blank">Reservation</Nav.Link></Link>                                
                                <Link href="/gallery" passHref><Nav.Link>Gallery</Nav.Link></Link>
                                <Link href="/contact" passHref><Nav.Link>Contact</Nav.Link></Link>
                                </Nav>
                            </Navbar.Collapse>
                            </Navbar>                    
                            </Col>
                        </Row>
                    </Container>             
                </div>
            </div>    
        </>      
    );
}
 
export default Header;