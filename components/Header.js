// importing next - link
import Link from 'next/link';

// importing classes - react bootstrap
import { Col, Container, Row, Navbar, Nav } from "react-bootstrap";

// importing fontawesome
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
                            <Link href="https://www.facebook.com/Rajah-Tandoori-525270921162468/">
                            <a target="_blank"><FontAwesomeIcon className="socials facebook" icon={faFacebookF} /></a>
                            </Link>
                            <Link href="https://www.tripadvisor.com/Restaurant_Review-g528789-d5815301-Reviews-Rajah_Tandoori-Bury_Greater_Manchester_England.html">
                            <a target="_blank"><FontAwesomeIcon className="socials tripadvisor" icon={faTripadvisor} /></a>
                            </Link>
                            <Link href="https://twitter.com/rajahtandoori">
                            <a target="_blank"><FontAwesomeIcon className="socials twitter" icon={faTwitter} /></a>
                            </Link>
                        </Col>
                        <Col xs={6} md={6}>
                            <div className="phone-block float-right">
                            <FontAwesomeIcon className="phone-icon" icon={faPhone} rotation={90} size="xs" /><Link href="tel:02078378398"><a className="phone">020 7837 8398</a></Link>
                            </div>  
                        </Col>
                        </Row>
                    </Container>
                </div>
                <div className="topmenu">
                    <Container>
                        <Row>
                            <Col>
                            <Navbar expand="lg">
                            <img src="/main-logo.png" className="img-fluid" alt="logo"/>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="ml-auto">
                                <Link href="/"><a className="nav-link">Home</a></Link>
                                <Link href="/"><a className="nav-link">Order Online</a></Link>
                                <Link href="/"><a className="nav-link">Reservation</a></Link>
                                <Link href="/gallery"><a className="nav-link">Gallery</a></Link>
                                <Link href="/contact"><a className="nav-link">Contact</a></Link>
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