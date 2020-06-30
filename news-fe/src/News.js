import React, {Component, Fragment} from 'react';
import Header from "./components/Header";
import Home from "./components/Home";
import './App.css';

class News extends Component {
  render(){
    return(
      <Fragment>
        <Header/>
        <Home />
      </Fragment>
    );
  }
 
}

export default News;