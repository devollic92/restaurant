import Head from 'next/head';

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
            <Head>
                <title>Contact | Indian Restaurant in Kings Cross, London WC1X | Indian Lounge</title>           
                <meta name="description" content="Indian Lounge restaurant offers Indian food to takeaway or eat in the restaurant. The restaurant address is 343 Grays Inn Road, Kings Cross, London WC1X 8PX."></meta>        
            </Head>        
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
            <Iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4964.120254652927!2d-0.122096!3d51.530457!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b394bd6ef4d%3A0xdbe44a0067453657!2s343%20Grays%20Inn%20Rd%2C%20Kings%20Cross%2C%20London%20WC1X%208PX%2C%20UK!5e0!3m2!1sen!2sbd!4v1617773280559!5m2!1sen!2sbd" width="100%" height={450} />
        </>
    );
}

export default withLayout(<CustomLayout />)(Contact);

