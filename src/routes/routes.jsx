import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LandingPage from "../pages/landingPage/landingPage";
import VinLandingPage from "../pages/ChanVinSheng/VinLandingPage";
import Timothy from "../pages/Timothy/timothy";
import DotaAPI from "../pages/DotaAPI/HeroApi";

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
          <Route exact path="/DotaAPI" component={DotaAPI} />
        </Switch>
      </BrowserRouter>
    );
  }
}
