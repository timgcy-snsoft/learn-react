import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LandingPage from "../pages/landingPage/landingPage";
import LandingKY from "../pages/ChokKahYang/landingKY";
import VinLandingPage from "../pages/ChanVinSheng/VinLandingPage";
import Timothy from "../pages/Timothy/timothy";
import TeamPlayer from "../pages/Timothy/teamPlayer";
import DotaPlayer from "../pages/Timothy/dotaPlayer";

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
          <Route exact path="/kychok/" component={LandingKY} />
          <Route exact path="/team/:id/players" component={TeamPlayer} />
          <Route exact path="/players/:id" component={DotaPlayer} />
        </Switch>
      </BrowserRouter>
    );
  }
}
