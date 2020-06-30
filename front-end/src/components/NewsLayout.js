import React, { Component } from "react";
import Container from "react-bootstrap/Container";

import EYantraHeader from "./EYantraHeader";
import UserHeader from "./UserHeader";
import GetNewsWithRouter from "./GetNews";

import axios from "axios";

import {API_URL_NEWS} from "../constants";
import "../css/styles.css";

class NewsLayout extends Component{

    state = {
        news:null,
        id : this.props.match.params.id,
    };

    componentDidMount(){
        this.resetState(this.state.id);
    };

    getNews = id => {    
        axios.get(API_URL_NEWS+id+"/").then(res => this.setState({news: res.data}));   
    };
    
    resetState =id => {
        this.getNews(id);
    };

    render(){
        
        return(
            <Container fluid>
                <EYantraHeader />
                <UserHeader />
                <GetNewsWithRouter news = {this.state.news} />
            </Container>
        )
    }
}

export default NewsLayout;