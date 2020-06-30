import React, {Component} from "react";
import {Col, Container, Row} from "reactstrap";
//import WebSocketInstance from "./Websocket";
import NewsCorner from "./NewsCorner";
import InitiativesCorner from "./InitiativesCorner";
import NewsList from "./NewsList";
import NewNewsModal from "./NewNewsModal";


import axios from "axios";

import {API_URL_INITIATIVES, API_URL_NEWS} from "../constants";
//import WebSocketInstance from "./Websocket";
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
            this.getNews();
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

    getNews = () => {
        axios.get(API_URL_NEWS).then(res => this.setState({news:res.data}));

    };

    getInitiatives =() => {
        axios.get(API_URL_INITIATIVES).then(res => this.setState({initiatives:res.data}));
    }

    resetState =() => {
        this.getNews();
        this.getInitiatives();
    };

    render(){
    
        return (
            <Container style={{marginTop: "20px"}}>
                <Row>
                    <Col className="md-col-6"> 
                        <NewsList
                            news = {this.state.news}
                            resetState = {this.resetState}
                        />
                    </Col>
{/*                 
                    <Col className="md-col-6">
                        <InitiativesCorner 
                            initiatives = {this.state.initiatives}
                            resetState = {this.resetState}
                        />
                    </Col> */}
                </Row>
                <Row>
                <Col>
                    <NewNewsModal create={true} resetState ={this.resetState} />
                </Col>
                </Row>
            </Container>
        );
    }
}

export default Home;