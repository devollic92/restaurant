// importing classes - react bootstrap
import { Col, Container, Row } from "react-bootstrap";

import ornaments from '../../slider/ornaments.png';

const Introduction = () => {
    return (
        <div className="introduction section-pad">
            <Container>
                <Row>
                    <Col md={12} className="text-center">
                        <h1 className="page-heading-1">Best Indian Restaurant &amp; Takeaway in Carmel Street, Abertillery</h1>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} className="text-center">
                        <h2 className="page-heading-2">Local Indian Restaurant &amp; Takeaway in Carmel Street, Abertillery NP13 serving near Llanhilleth, Trinant NP11, Manmoel NP12 &amp; Brynmawr NP23</h2>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <div className="ornaments text-center">
                            <img src={ornaments} alt="Ornaments"/>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <p>Sajna Spice, top-ranked Indian takeaway in Abertillery, offers you a great selection of innovative &amp; mouthwatering dishes. We are currently serving in Llanhilleth, Trinant, Manmoel, Brynmawr and providing many traditional and old favorites that will leave you wanting for more.</p>
                        <p>Our chefs at Sajna Spice always ensure the fulfillment of your taste bud with the specialties in their field. You can always explore our popular foods namely – Tikka Massala, Madras, Garlic Chile etc. Don’t forget to order online delicious Indian food in Abertillery with just a few clicks through our website. Get mesmerized with our specialties today and enjoy delicious food.</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
 
export default Introduction;