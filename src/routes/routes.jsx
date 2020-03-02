import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import LandingPage from "../pages/landingPage/landingPage";

export default class Routes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={LandingPage}/>
                </Switch>
            </BrowserRouter>
        );
    }
}
