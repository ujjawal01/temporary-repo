import React, {Component} from "react";
import { Link, withRouter } from "react-router-dom";

import "../css/styles.css";

const tagWrap= {
    margin:"10px",
};

const color={
    color:"white"
}

class GetNews extends Component{
   
    render(){

        const news = this.props.news;
        function formatTags(tags){
            
            var tagArray = tags.split(",");
            return tagArray;
        }

        return(
            <div class="single-news">
                {!news || news.length<0 ? (
                    <div><b>Loading </b></div>
                ) :(
                    <div className ="widget-card-circle col-xs-2 col-md-7 order-md-1 order-12 mx-auto"> 
                        <div className="card-title bg-transparent"> {news.news_title}</div>
                        <div style={tagWrap}>
                                        
                            {
                                formatTags(news.tags).map(tag => (
                                    <div className="tags">
                                        <Link to={`/news/tags/${tag}`}>{tag}</Link>                                                        
                                    </div>
                                ))
                            }
                        </div>
                        <div className="card-body">
                            <p>
                                {news.news_content}
                            </p>
                           
                        </div>
                    </div>
                )}
               
            </div>
        )
    }

}

const GetNewsWithRouter = withRouter(GetNews)

export default GetNewsWithRouter;