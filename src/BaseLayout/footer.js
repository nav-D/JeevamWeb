import React from 'react';
import {Row, Col} from 'reactstrap';

const Footer = (props) => {
    return(
    <div className="footer">
            <Row style={{alignItems:"center", justifyContent:'space-between'}}>     
                <Col md="4">
                    <img src="assets/footerLogo.svg" alt="footerLogo"/>
                    <address>
                        1st Floor, Connaught Place, Delhi DL 110001<br/>
                        Contact us at <a href="mailto:hello@jeevamhealth.com">
                            hello@jeevamhealth.com</a><br/>
                        Or call us at <a href="tel:+917667487293"> +91 7667487293</a>
                    </address>
                </Col>
                <Col md="3">
                    <div className="company">
                        <h3>Company</h3>
                        <Row>
                            <ul className="col list-unstyled">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Our Approach</a></li>
                                <li><a href="#">Outcomes</a></li>
                            </ul>
                            <ul className="col list-unstyled">
                                <li><a href="#">Blogs</a></li>
                                <li><a href="#">Plans</a></li>
                                <li><a href="#">Team</a></li>
                            </ul>
                        </Row>
                    </div>
                </Col>
                <Col md='3'>
                    <div className="condition">
                        <h3>Conditions</h3>
                        <Row>
                            <ul className="col list-unstyled">
                                <li><a href="#">Diabetes</a></li>
                                <li><a href="#">Auto Immune</a></li>
                                <li><a href="#">Hypertension</a></li>
                            </ul>
                            <ul className="col list-unstyled">
                                <li><a href="#">Thyroid</a></li>
                                <li><a href="#">Cholestrol</a></li>
                                <li><a href="#">PSA</a></li>
                            </ul>
                        </Row>
                    </div>
                </Col>
                <Col style={{textAlign:"end"}} >
                    <Col>
                        <a className="btn btn-social-icon" href="http://google.com/+"><img src="assets/instagram.svg" alt=""/></a>
                        <a className="btn btn-social-icon" href="tel:+91 7667487293"><img src="assets/whatsappFooter.svg" alt=""/></a>
                    </Col>
                    <Col>
                        <a className="btn btn-social-icon" href="http://www.facebook.com/in/"><img src="assets/facebook.svg"alt=""/></a>
                        <a className="btn btn-social-icon" href="http://linkedin.com/"><img src="assets/linkedin.svg" alt=""/></a>
                    </Col>                  
                </Col>
                    
            </Row>
            <Row className="copyright" style={{justifyContent:'center'}}>             
                <div className="col-auto">
                    <p>© 2021, Jeevam Health. <a>Read our Privacy Policy</a></p>
                </div>
            </Row>
    </div>
    )
}

export default Footer;