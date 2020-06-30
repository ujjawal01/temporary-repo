import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"; 
import IITB from "../images/iitblogo.png";
import MHRD from "../images/MHRD-Logo.png";

class Footer extends Component{
    render() {
        return (
            <footer className="footer">
                <Row>
                    <Col md={3}>
                        <p>
                            <a href="https://www.facebook.com/eyantra">
                                <i className="fa fa-facebook fa-fw fa-2x "></i>
                            </a>
                            <a href="https://www.instagram.com/eyantra">
                                <i className="fa fa-instagram fa-fw fa-2x"></i>
                            </a>
                            <a href="https://www.linkedin.com/company/14407133/admin/">
                                <i className="fa fa-linkedin fa-fw fa-2x"></i>
                            </a>
                            <a href="https://twitter.com/eyantra_iitb">
                                <i className="fa fa-twitter fa-fw fa-2x "></i>
                            </a>
                            <a href="https://www.youtube.com/user/eyantra/videos">
                                <i className="fa fa-youtube fa-fw fa-2x "></i>
                            </a>
                        </p>

                    </Col>

                    <Col md={4}>
                        <p>
                            IIT Bombay envisages the <strong>'e-Yantra'</strong> 
                            platform to harness the intellectual talent of young India to create utility 
                            based robotic applications for usage across variety of applications such as: 
                            agriculture, manufacturing, defense, home, city maintenance and services industries.
                        </p>
                    </Col>

                    <Col md={4} offset={1}>
                        <address>
                            <strong>ERTS Lab</strong> <br />
                            SIC 102, KReSIT Building,<br />
                            CSE Department<br />
                            IIT Bombay, Powai,<br />
                            Mumbai - 400076, Maharashtra.
                        </address>
                    </Col>
                </Row>
              
                <Row>
                    <Col md={12}>
                        <br />
                        <div class="footer-copyright text-center">
                            The e-Yantra name and logo is a trademark of IIT Bombay. The name and logo should not be reproduced without express consent of IIT Bombay.
                        </div>
                        <div class="footer-copyright text-center">
                            Copyright © 2020 e-Yantra. All rights reserved.<br />
                            <div class="links-footer">
                                <a href="contact-us">CONTACT US</a> • <a href="team">TEAM</a> • <a href="faq">FAQ</a> 
                            </div>  
                        </div>
                    </Col>
                </Row>

            </footer>
        );
    }
}

export default Footer;