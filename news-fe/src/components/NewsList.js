import React, { Component } from "react";
import {Table} from "reactstrap";
import NewNewsModal from "./NewNewsModal";

import ConfirmRemovalModal from "./ConfirmRemovalModal";

class NewsList extends Component{
    render(){
        const news = this.props.news;
        return (
            <Table dark>
                <thead>
                    <tr>
                        <th>News Id</th>
                        <th>News Title</th>
                        <th>News Content</th>
                        <th>News Visible</th>
                        <th>News Tags</th>
                        <th>Publish date</th>
                        <th>Audience</th>
                        <th></th>
                       
                    </tr>
                </thead>

                <tbody>
                    {!news || news.length <= 0 ? (
                        <tr>
                            <td colSpan="6" align="center">
                                <b>No News Till Now. </b>
                             </td>
                        </tr>
                    ):(
                        news.map(news => (
                            <tr key={news.id}>
                                <td>{news.id}</td>
                                <td>{news.news_title}</td>
                                <td>{news.news_content}</td>
                                <td>{news.visible.toString()}</td>
                                <td>{news.tags}</td>
                                <td>{news.publish_date}</td>
                                <td>{news.audience_type}</td>
                                
                               
                                <td align="center">
                                    <NewNewsModal
                                        create = {false}
                                        news = {news}
                                        resetState = {this.props.resetState}
                                    />

                                    &nbsp;&nbsp;

                                    <ConfirmRemovalModal id={news.id}
                                         resetState = {this.props.resetState}
                                    />
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </Table>
        );
    }
}

export default NewsList;