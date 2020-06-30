import React, { Component } from "react";
import Container from "react-bootstrap/Container";

import EYantraHeader from "./EYantraHeader";
import UserHeader from "./UserHeader";

import axios from "axios";

import {API_URL_NEWS} from "../constants";
import GetNewsByTagWithRouter from "./GetNewsByTag";
import "../css/styles.css";

class NewsWithTagLayout extends Component{

    state = {
        news:[],
        tag : this.props.match.params.tag
    };

    componentDidMount(){
        this.resetState(this.state.tag);
    };

    componentDidUpdate(prevProps) {
        const {match} = this.props;

        if (prevProps.match.params.tag !== match.params.tag) {
            this.getNewsByTag(match.params.tag);
        }
    }

    getNewsByTag = tag => {    
        axios.get(API_URL_NEWS+"tags/"+tag+"/").then(res => this.setState({news: res.data}));
    };

    resetState =tag => {
        this.getNewsByTag(tag);
    };

    render(){

        return(
            <Container fluid >
                <EYantraHeader />
                <UserHeader />
                <GetNewsByTagWithRouter news = {this.state.news}
                   tag={this.state.tag} />
            </Container>
        )
    }
}

export default NewsWithTagLayout;