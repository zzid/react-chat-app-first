import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";

import { Join, Chat } from "./components";
import { VoteContainer } from "./components/Vote";
const baseURL = "react-chat-app-first";
const App = () => (
    <Router basename={baseURL}>
        <Route exact path="/" component={Join} />
        <Route path="/chat" component={Chat} />
        <Route path="/vote" component={VoteContainer} />
    </Router>
);

export default App;
