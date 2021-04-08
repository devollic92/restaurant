import Link from 'next/link';
import { Col, Container, Row } from "react-bootstrap"

const Reservation = () => {
    return (
        <div className="reservation">
            <div className="overlay"></div>
            <Container>
                <Row>
                    <Col md={12} className="text-center">
                        <h2 className="div-heading-1">Book to enjoy a sumptuous culinary experience</h2>
                    </Col>
                    <Col md={12} className="text-center">
                        <div className="reservation-btn clearfix">
                            <Link href="https://backoffice.chefonline.co.uk/draft/indian-lounge-kings-cross-london-wc1x/reservations"><a target="_blank" className="btn custom-btn" target="_blank">Reservation</a></Link>
                        </div>    
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
 
export default Reservation;