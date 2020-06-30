import React, {Component} from "react";

import axios from "axios";

import {API_URL_NEWS} from "../constants";
class GetNews extends Component{
    state = {
        news:[]
    };
    

    
    getNews (id) {
        axios.get(API_URL_NEWS+id+"/").then(res => this.setState({news:res.data}));
    
    };

    render(){
        return(
            <div class="singlenews">
                <div>
                    {this.state.news.news_title}
                </div>
                <div>
                    {this.state.news.news_content}
                </div>

            </div>
        )
    }

}

export default GetNews;