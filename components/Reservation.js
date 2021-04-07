// importing classes - react bootstrap
import { Col, Container, Row } from "react-bootstrap"

// import next - link
import Link from 'next/link';


const Reservation = () => {
    return (
        <div className="reservation">
            <div className="overlay"></div>
            <Container>
                <Row>
                    <Col md={12} className="text-center">
                        <h2 className="div-heading-1">Book to enjoy a sumptuous culinary experience</h2>
                    </Col>
                    <Col md={12} className="text-center reservation-btn">
                        <Link href="https://backoffice.chefonline.co.uk/draft/indian-lounge-kings-cross-london-wc1x/reservations"><a target="_blank" className="custom-btn" target="_blank">Reservation</a></Link>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
 
export default Reservation;