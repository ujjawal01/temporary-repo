import React, { Component } from "react";
import {Link} from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import GridLayout from 'react-grid-layout';


import axios from "axios";

import {API_URL_USER} from "../constants";
import UserHeader from "./UserHeader";
import Footer from "./Footer";
import GetProfileWithRouter from "./GetProfile";


import ProjectTimeline from "./ProjectTimeline";

import "../css/styles.css";
//import "../node_modules/react-grid-layout/css/styles.css"
//import "../node_modules/react-resizable/css/styles.css"



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
        const layout = [
            {i: 'a', x: 0, y: 0, w: 1, h: 2, static: true},
            {i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4},
            {i: 'c', x: 4, y: 0, w: 1, h: 2}
          ];



        return(


            <Container>
               
                <UserHeader/>
                <GridLayout className="layout" layout={layout} cols={12} rowHeight={30} width={1200}>
            <GetProfileWithRouter user = {this.state.user}/>
                    //<div key="a">    </div>
                    //<div key="b">b</div>
                    //<div key="c">c</div>
               </GridLayout>
              
               

            </Container>

        )
    }
}

export default Profile;