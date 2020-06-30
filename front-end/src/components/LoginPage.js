import React, { Component } from "react";
import { Form, FormGroup } from "reactstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import querystring, { stringify } from "querystring";
import axios from "axios";

import "../css/styles.css";
import e_logo from "../images/e-yantra-transparent.png";
import EYantraHeader from "./EYantraHeader";

class LoginPage extends Component{
   
    render(){
        return(
            <Container fluid>
                {/* main row  */}
                <Row>
                    {/* <!-- first column --> */}
                    <Col md={6} >
                        {/* <!-- left half row 1 logo --> */}
                      
                        <EYantraHeader />
                       
                        {/* <!-- row 1 end --> */}
                        {/* <!-- left half form row 2--> */}
                        <Row >
                            <Col>
                                <Form>
                                    <FormGroup>
                                        <h2>Hello e-Yantrik</h2>
                                    </FormGroup>
                                        
                                   
                                    <FormGroup>
                                        <label for="email">Email address</label>
                                        <input type="email" name="email" id="email" placeholder="you@example.com" required />
                                    </FormGroup>
                                       
                                    <FormGroup>
                                        <label for="password">Password</label>
                                        <input type="password" name="password" id="password" placeholder="enter your password here" required />    
                                    </FormGroup>
                                    <FormGroup>
                                        <input type="submit" value="Sign in" />
                                   </FormGroup>
                                </Form>
                            </Col>
                        </Row>
                        {/* <!-- row 2 end --> */}

                        {/*<!-- left half row 3 OR --> */}
                        <Row className= "justify-content-center">
                            <Col className="hl justify-content-center"><span className="hl inner">OR</span></Col>
                        </Row>
                        {/* <!-- row 3 end -->*/}

                        {/*<!-- left half row 4 social login --> */}
                        <Row className="justify-content-center">
                            <Col>
                                <a href="#" className="btn btn-social btn-google ">
                                    <span className="fa fa-google"></span> Login with Google
                                </a>
                               
                                <a href="#" className="btn btn-social btn-linkedin">
                                    <span className="fa fa-linkedin"></span> Login with LinkedIn
                                </a>
                              
                                <a href="#" className="btn btn-social btn-github ">
                                    <span className="fa fa-github"></span> Login with GitHub
                                </a>
                            </Col>
                        </Row>
                        {/* <!-- row 4 end -->   */}
                    </Col>
                    {/* <!-- first col end -->

                    <!-- second col half back ground --> */}
                    <Col md={6} className="side-logo">
                        <img src={e_logo} alt="e-logo" />
                    </Col>
                </Row>
                {/* <!-- main row end --> */}
            {/* <!-- main container end --> */}
            </Container>
        )
    }
}

export default LoginPage