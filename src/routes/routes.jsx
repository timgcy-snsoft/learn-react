import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LandingPage from "../pages/landingPage/landingPage";
import LandingDota from "../pages/ChokKahYang/LandingDota";
import LandingKY from "../pages/ChokKahYang/landingKY";
import VinLandingPage from "../pages/ChanVinSheng/VinLandingPage";
import Timothy from "../pages/Timothy/timothy";
import MatchDetail from "../pages/ChokKahYang/MatchDetail";

export default class Routes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={LandingPage} />
                    <Route path="/Timothy" component={Timothy} />
                    <Route exact path="/ChanVinSheng" component={VinLandingPage} />
                    <Route exact path="/kychok" component={LandingKY} />
                    <Route exact path="/dota2" component={LandingDota} />
                    <Route exact path="/dota2/match/:id" component={MatchDetail} />
                </Switch>
            </BrowserRouter>
        );
    }
}
