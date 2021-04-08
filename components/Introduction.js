import { Col, Container, Row } from "react-bootstrap";

import ornaments from '../public/ornaments.png';

const Introduction = () => {
    return (
        <div className="introduction section-pad">
            <Container>
                <Row>
                    <Col md={12} className="text-center">
                        <h1 className="page-heading-1">Best Indian Restaurant &amp; Takeaway in Kings Cross, London</h1>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} className="text-center">
                        <h2 className="page-heading-2">Local Indian Restaurant &amp; Takeaway in Kings Cross, London WC1X serving near Clerkenwell, Finsbury, Islington EC1R, Euston NW1</h2>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <div className="ornaments text-center">
                            <img src={ornaments} width={32} height={26} alt="Ornaments"/>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <p>Here at Indian Lounge, we want you to feel special and experience a sense of royalty in a relaxed ambience. Our top rated chef use only the freshest ingredients, assuring you get the highest possible quality authentic Asian Cuisine.</p>
                        <p>Not only do we offer a very comprehensive menu, should you require a dish specially cooked to order, or have any special dietary requirements we would be happy to accommodate your request. Relax, eat, drink and enjoy your Indian Lounge experience.</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
 
export default Introduction;