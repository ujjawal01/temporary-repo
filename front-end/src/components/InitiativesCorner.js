import React, { Component } from "react";
import { Button } from "reactstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "../css/styles.css";

class InitiativesCorner extends Component{
    render(){

        const initiatives = this.props.initiatives;

        return (
            <Row>
                <Col>
                    <div className="widget-card-circle">
                        <Row>
                            <Col>
                                <h3 className="ml-4">Your Initiatives</h3>
                            </Col>
                        </Row>            
                        <Row>
                            <Col>
                                <div>
                                    {!initiatives || initiatives.length <= 0 ? (
                                        <Row>
                                            <Col>
                                                <div className="card-title bg-transparent">
                                                    <b>No Initiatives Till Now. </b>
                                                </div>
                                            </Col>                                           
                                        </Row>):( 
                                        <Row>
                                            {initiatives.map(initiative => (                   
                                                <Col md={6}>
                                                    <Button className="btn btn-secondary btn-lg" >{initiative.acronym}<br/>{initiative.full_name}</Button>
                                                </Col>   
                                            ))}
                                        </Row>
                                    )}
                                </div>
                            </Col>
                            
                        </Row>           
                    </div>
                </Col>
            </Row>
        )
    }
}

export default InitiativesCorner;