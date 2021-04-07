// importing classes - react bootstrap
import { Col, Container, Row } from "react-bootstrap";

// import next - link
import Link from 'next/link';

const Footer = () => {
    return (
        <div className="footer section-pad">
            <Container>
                <Row>
                    <Col md={4}>
                        <h3 className="page-heading-1">Indian Lounge</h3>
                        <li className="list-unstyled">Email: <Link href="mailto:info@indianlounge.co.uk"><a>info@indianlounge.co.uk</a></Link></li>
                        <li className="list-unstyled">Tel: <Link href="tel:02078378398"><a>020 7837 8398</a></Link></li>
                        <p>343 Grays Inn Road, Kings Cross WC1X 8PX</p>
                    </Col>
                    <Col md={4}>
                        <h3 className="page-heading-1">Today's Opening Hours</h3>
                    </Col>
                    <Col md={4}>
                        <h3 className="page-heading-1">Food Hygiene Rating</h3>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
 
export default Footer;