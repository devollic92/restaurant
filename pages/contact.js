
// layout persistent library
import { withLayout } from '@moxy/next-layout';

// importing classes - react bootstrap
import { Col, Container, Row } from 'react-bootstrap';

// importing iframe library
import Iframe from '@trendmicro/react-iframe';

// importing custom layout
import CustomLayout from '../components/layout/CustomLayout';

const Contact = () => {
    return (
        <>
            <div className="inner-banner">
                <div className="banner-overlay"></div>
                <Container>
                    <Row>
                        <Col xs={12}>
                            <div className="text-center">
                                <h1 className="banner-headline">Contact</h1>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4942.247266409692!2d-3.132929!3d51.730774!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9aa2884044b85dc8!2sSajna%20Spice!5e0!3m2!1sen!2sbd!4v1617455327997!5m2!1sen!2sbd" width="100%" height={450} />
        </>
    );
}

export default withLayout(<CustomLayout />)(Contact);

