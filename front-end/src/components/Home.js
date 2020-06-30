import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import EYantraHeader from "./EYantraHeader";
import UserHeader from "./UserHeader";
import Footer from "./Footer";

import NewsCorner from "./NewsCorner";
import InitiativesCorner from "./InitiativesCorner";

import axios from "axios";

import {API_URL_INITIATIVES, API_URL_NEWS} from "../constants";
import "../css/styles.css";
const API_PATH = 'ws://localhost:8000/ws/news/'

class Home extends Component{

    state = {
        news:[],
        initiatives: [],
    };

    ws = new WebSocket(API_PATH)

    componentDidMount(){

        this.ws.onopen = () => {
            console.log("Connected");
        }

        this.ws.onmessage = event => {
            console.log("Message")
            console.log(event.data)
            this.getAllNews();
        }

        this.ws.onerror = event => {
            console.log(event);
        }

        this.ws.onclose = () => {
            console.log("Disconnected");

            this.setState({ws : new WebSocket(API_PATH),})
        }


        this.resetState();
    }

    getAllNews = () => {
        axios.get(API_URL_NEWS).then(res => this.setState({news:res.data}));
    };

    getInitiatives =() => {
        axios.get(API_URL_INITIATIVES).then(res => this.setState({initiatives:res.data}));
    }

    resetState =() => {
        this.getAllNews();
        this.getInitiatives();
    };

    render() {
        return(
            <Container fluid>
              
                <Row>
                    <Col>
                    <UserHeader />
                    </Col>
                   
                </Row>

                <Row>
                    <Col md={6}>
                        <NewsCorner news = {this.state.news}
                            resetState = {this.resetState}
                        />
                    </Col>

                    <Col md={6}>
                        <InitiativesCorner
                            initiatives = {this.state.initiatives}
                            resetState = {this.resetState}
                        />                        
                    </Col>

                </Row>

               
                <Footer />
               
            </Container>
   
        );
    }
}

export default Home;