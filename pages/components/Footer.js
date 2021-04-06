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
                        <h3 className="page-heading-1">Sajna Spice</h3>
                        <li className="list-unstyled">Email: <Link href="mailto:info@sajnaspice.co.uk"><a>info@sajnaspice.co.uk</a></Link></li>
                        <li className="list-unstyled">Tel: <Link href="tel:01617052711"><a>0161 705 2711</a></Link></li>
                        <p>4 Carmel Street, Abertillery, Newport NP13 1DG</p>
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