import React, { Component } from "react";

import GetNews from "./GetNews";
import { CardBody, CardText, Card } from "reactstrap";
//import "../Newsfeed/assets/css/styles.css"

class NewsCorner extends Component{
    constructor(props) {
        super(props);
        // this.getNewsElement = React.createRef();
        // this.handleClick= this.handleClick.bind(this)
    }

    // handleClick (id) {
    //     this.getNewsElement.current.getNews(id);

    // }

    render(){
        const news = this.props.news;
        function formatTags(tags){
            
            var tagArray = tags.split(",");
            return tagArray;
        }

        const cardTitle = {
            fontWeight: "400",
            fontSize: "18px",
            margin: "0",
            fontFamily: 'Roboto',
            background: 'transparent',
            color: "#252525"
        };


        const card = {
            background: "#ffffff",
            margin: "7.5px 0",
            padding: "20px",
            border: "1px solid #e7e7e7",
            borderRadius: "3px",
            boxShadow: "0 5px 20px rgba(0, 0, 0, 0.1)",
            
           
        }

        const tags = {
            borderRadius: "50%",
            border: "black solid 2px",
            display: "inline",
            padding:"5px",
            margin: "5px"  ,
            color: "black",  

        };

        const tagWrap= {
            margin:"10px",
        };

        const newsWrap ={
            height: "41rem" , 
            width:"45rem", 
            backgroundColor: "#2E0266",
            margin: "7.5px 0",
            padding: "20px",
            border: "1px solid #e7e7e7",
            borderRadius: "3px",
            boxShadow: "0 5px 20px rgba(0, 0, 0, 0.1)",
            overflow:"scroll",
           
        };

        const color={
            color:"white"
        }

        return (
            <div style={newsWrap}>
                <div style={cardTitle}>
                   <div style={color}><h3> <b>News Corner. </b> </h3></div>
                </div>
                {!news || news.length <= 0 ? (
                    <div style={cardTitle}>
                        <b>No News Till Now. </b>
                    </div>):(    
                            news.map(news => (
                                <div style={card} id="news" >
                                    <div style={tagWrap}>
                                        {/* <GetNews ref={this.getNewsElement} id={news.id}/> */}
                                        {
                                            formatTags(news.tags).map(tag => (
                                                <div style={tags}>
                                                    {tag}
                                                </div>
                                            ))
                                        }
                                   </div>
                                    <div style={cardTitle}><h5>{news.news_title}</h5></div>
                                    <div className={CardBody}>
                                        <p className={CardText}>{news.news_content}</p>
                                    </div>
                                    
                                </div>
                            ))
                    )}    
            </div>
         
        );
    }
}

export default NewsCorner;

