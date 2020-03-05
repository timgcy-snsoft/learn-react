import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LandingPage from "../pages/landingPage/landingPage";
import LandingKY from "../pages/ChokKahYang/landingKY";
import VinLandingPage from "../pages/ChanVinSheng/VinLandingPage";
import Timothy from "../pages/Timothy/timothy";
import DotaLandingPage from "../pages/DotaAPI/DotaLandingPage";
import HeroProfile from "../pages/DotaAPI/HeroProfile";

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
          <Route exact path="/DotaAPI" component={DotaLandingPage} />
          <Route
            exact
            path="/DotaAPI/HeroProfile/:id"
            component={HeroProfile}
          />
            <Route exact path="/kychok/" component={LandingKY}/>
        </Switch>
      </BrowserRouter>
    );
  }
}
