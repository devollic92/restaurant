import { Col, Container, Row } from "react-bootstrap";

const year = new Date().getFullYear()

const Copyright = () => {
    return (
        <div className="copyright">
            <Container>
                <Row>
                    <Col md={12} className="text-center">
                        <li className="list-unstyled">ChefOnline Partner Restaurant</li>
                        <li className="list-unstyled">Copyright © {year} chefonline.co.uk</li>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
 
export default Copyright;