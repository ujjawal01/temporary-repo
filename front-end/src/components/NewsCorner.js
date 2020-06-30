import React, { Component } from "react";
import {Link} from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "../css/styles.css";

const tagWrap= {
    margin:"2px",
};
 
const color={
    color:"white"
}

class NewsCorner extends Component{
   
    render(){
        const news = this.props.news;
       
        function formatTags(tags){
            
            var tagArray = tags.split(",");
            return tagArray;
        }       

        return (

            <Row className="news-wrap">
                <Col>
                    <div className="widget-card-circle" >
                        <div style={color} className="card-title"><h3> <b>News Corner. </b> </h3></div>
                        {!news || news.length <= 0 ? (
                            <div className="card-title bg-transparent" style={color}>
                                <b>No News Till Now. </b>
                            </div>):(    
                                news.filter(news => news.visible===true).map(visibleNews => (
                                    <div className="card" id="news" >
                                        <Link to={`/news/${visibleNews.id}`}>
                                            <div style={tagWrap}>                                        
                                                {
                                                    formatTags(visibleNews.tags).map(tag => (
                                                        <div className="tags">
                                                            <Link to={`/news/tags/${tag}`}>{tag}</Link>                                                        
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                            <div className="card-title bg-transparent "> {visibleNews.news_title}</div>
                                            <div className="card-body">
                                                <p>{visibleNews.news_content}</p>
                                            </div>
                                        </Link>                                   
                                    
                                    </div>
                                ))
                            )
                        }    
                    </div>
                </Col>
            </Row>
            
         
        );
    }
}

export default NewsCorner;

