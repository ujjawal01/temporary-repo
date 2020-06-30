import React from "react";
import { Route, Switch, Redirect} from "react-router-dom";

import NewsCorner from "./components/NewsCorner";
import InitiativesCorner from "./components/InitiativesCorner";
import GetNews from "./components/GetNews";
import GetNewsByTag from "./components/GetNewsByTag";
import Home from "./components/Home";

export default(
    <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/news/tags/:tag" component={GetNewsByTag} />
        <Route path="/news/:newsId" component={GetNews} />
        <Redirect to="/" />
    </Switch>
)