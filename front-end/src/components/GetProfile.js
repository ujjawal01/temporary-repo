import React, {Component} from "react";
import { Link, withRouter } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from 'react-bootstrap/Image';

import User from "../images/user.png";

import ProjectTimeline from "./ProjectTimeline";
import EditProfileModal from "./EditProfileModal";

import "../css/styles.css";

const imgStyle = {
    float:"left",
    width: "200px",
    height:"200px",
}

class GetProfile extends Component {
    render(){
        const user = this.props.user;
        return(
            <Row className= "justify-content-center">
                {/* User Info */}
                <Col md= {6}>
                    <Row>
                        <Col>
                  
                            <p>
                                <img src={User} style= {imgStyle}/>
                                <h2>{user.firstname} {user.lastname} </h2><br /> 
                                {user.email} <br />
                                {user.phone} <br />
                            </p>
                            <p>
                            <b>{user.role}</b> <br />
                            {user.college_name} <br />
                            {user.department_id} <br />
                            </p>
                            <EditProfileModal user={user}/>
                        </Col>
                    </Row>
                   
                </Col>

                {/* About me */}
                <Col md= {6}>
                    <h4>About Me </h4> <br />
                    <p>
                        {user.about_me}
                    </p>
                </Col>

                {/* Projects */}
                <Col md= {6} className="justify-content-start">
                   
                    <ProjectTimeline resetState ={this.resetState}/>
                </Col>

                {/* Skills */}
                <Col md= {6}>
                    Skills
                </Col>
            </Row>
        )
    }
}

const GetProfileWithRouter = withRouter(GetProfile)
export default GetProfileWithRouter;

//  {/* left half */}
//  <Col>
//  <Row>
//      <Col>
//          <img src={User} />
//      </Col>
//      <Col>
//          <p>
//              <b>{user.firstname} {user.last_name} </b><br /> 
//              {user.email} <br />
//              {user.phone} <br />
//          </p>
//      </Col>
//  </Row>

//  <Row>
//      <Col>
//          <p>
//              <b>{user.role}</b> <br />
//              {user.college} <br />
//              {user.department_id} <br />
//          </p>
//      </Col>
//  </Row>

//  <Row>
//      <Col>
//          <ProjectTimeline resetState ={this.resetState}/>
//      </Col>
//  </Row>
// </Col>

// {/*Right Half */}
// <Col>
//  <Row>
//      <Col>
//          <h2>About Me </h2> <br />
//          <p>
//              {user.about_me}
//          </p>
//      </Col>
//  </Row>

//  <Row>
//      <Col>
//          Skills
//      </Col>
//  </Row>
// </Col>