import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo from "../images/eYantra_logo.svg";
import "../css/styles.css";

class EYantraHeader extends Component{
    render() {
        return(
            <Row>
                <Col>
                    <header>
                        <img src={logo} alt="logo" className="logo"/>
                    </header>
                </Col>
            </Row>            
        )
    }
}

export default EYantraHeader;