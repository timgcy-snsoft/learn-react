import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import LandingPage from "../pages/landingPage/landingPage";
import LandingKY from "../pages/ChokKahYang/landingKY";

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
                    <Route exact path="/kychok/" component={LandingKY}/>
                </Switch>
            </BrowserRouter>
        );
    }
}
