import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";

import Home from "./components/Home";
import NewsLayout from "./components/NewsLayout";
import NewsWithTagsLayout from "./components/NewsWithTagLayout";
import Profile from "./components/Profile";
import LoginPage from "./components/LoginPage";
import Register from "./components/RegisterForm"

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        
        <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/news/tags/:tag" component={NewsWithTagsLayout} />
        <Route path="/news/:id" component={NewsLayout} />
        <Route path="/profile" component={Profile}/>
        <Route path="/login" component={LoginPage}/>
        <Route path="/register" component={Register} />
        <Redirect to="/" component={Home}/>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
