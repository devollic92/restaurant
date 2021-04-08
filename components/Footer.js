import Link from 'next/link';
import { Col, Container, Row, OverlayTrigger, Popover, Button } from "react-bootstrap";

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
                        <h3 className="page-heading-1">Food Hygiene Rating</h3>
                        <div className="hygiene">
                            <Link href="https://ratings.food.gov.uk/business/en-GB/779023/Indian-Lounge-Camden" passHref><a target="_blank"><img className="hygiene" src="/hygiene4.jpg" width={200} height={100} alt="Food Hygiene"/></a></Link>
                        </div>
                    </Col>
                    <Col md={4}>
                        <h3 className="page-heading-1">Today's Opening Hours</h3>
                        <p className="mb-0">Friday: 5:00 PM - 11:00 PM</p>
                        <>
                            {['top'].map((placement) => (
                                <OverlayTrigger
                                trigger="click" 
                                key={placement}
                                placement={placement}
                                overlay={
                                    <Popover id={`popover-positioned-${placement}`}>
                                     <Popover.Content>
                                        <ul className="list-unstyled time-list">
                                            <li>Sunday:<br/>5:00 PM - 11:00 PM</li>
                                            <li>Monday:<br/>5:00 PM - 11:00 PM</li>
                                            <li>Tuesday:<br/>5:00 PM - 11:00 PM</li>
                                            <li>Wednesday:<br/>5:00 PM - 11:00 PM</li>
                                            <li>Thursday:<br/>5:00 PM - 11:00 PM</li>
                                            <li>Friday:<br/>5:00 PM - 11:00 PM</li>
                                            <li>Saturday:<br/>5:00 PM - 11:00 PM</li>
                                        </ul>
                                    </Popover.Content>
                                    </Popover>
                                }
                                >
                                <Button className="time">See more</Button>
                                </OverlayTrigger>
                            ))}
                        </>
                    </Col>                    
                </Row>
            </Container>
        </div>
    );
}
 
export default Footer;