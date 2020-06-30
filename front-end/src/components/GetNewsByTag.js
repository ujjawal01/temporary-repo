import React, {Component} from "react";
import { Link, withRouter } from "react-router-dom";

import "../css/styles.css";

const tagWrap= {
    margin:"10px",
};

const color={
    color:"white"
}

class GetNewsByTag extends Component{
   
    render(){
        const news = this.props.news;
        const tag = this.props.tag;

        function formatTags(tags){    
            var tagArray = tags.split(",");
            return tagArray;
        }       

        return (
            <div className="news-wrap">
                <div className="card-title">
                   <div style={color} className="card-title"><h3> <b>News Results for {tag} </b> </h3></div>
                </div>
                {!news || news.length <= 0 ? (
                    <div style={color} className="card-title">
                        <b>Loading</b>
                    </div>):(    
                            news.map(news => (
                                <div id="news" className="card">
                                    <Link to={`/news/${news.id}`}>
                                        <div style={tagWrap}>
                                        
                                            {
                                                formatTags(news.tags).map(tag => (
                                                    <div className="tags">
                                                        <Link to={`/news/tags/${tag}`}>{tag}</Link>                                                        
                                                    </div>
                                                ))
                                            }
                                        </div>
                                        <div className="card-title bg-transparent"><h5>{news.news_title}</h5></div>
                                        <div className="card-body">
                                            <p>{news.news_content}</p>
                                        </div>
                                    </Link>                                   
                                </div>
                            ))
                    )}    
            </div>
         
        );
    }    
}

const GetNewsByTagWithRouter = withRouter(GetNewsByTag)
export default GetNewsByTagWithRouter;