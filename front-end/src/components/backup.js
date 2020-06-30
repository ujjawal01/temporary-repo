import React, { Component } from "react";
import {Link} from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import axios from "axios";

import {API_URL_USER} from "../constants";
import UserHeader from "./UserHeader";
import Footer from "./Footer";
import GetProfileWithRouter from "./GetProfile";


import ProjectTimeline from "./ProjectTimeline";

import "../css/styles.css";

class Profile extends Component{

    state = {
        user: {
            "firstname": "jay",
    "lastname": "roy",
    "college_name": "DSS",
    "email": "uddjj@gmail.com",
    "email_verified": null,
    "role": "Student",
    "department_id": "Computer science",
    "username": "jay33",
    "about_me": "I am cool",
    "phone": "8454545656",
        }
    };

    componentDidMount(){};

    getProfile = id => {
        axios.get(API_URL_USER + id +"/").then(res => this.setState({user: res.data}));
    }

    resetState = id => {
        this.getProfile(id);
    }

    render (){

        return(
            <Container>
               
                <UserHeader />
              
                <GetProfileWithRouter user = {this.state.user}/>

            </Container>
        )
    }
}

export default Profile;