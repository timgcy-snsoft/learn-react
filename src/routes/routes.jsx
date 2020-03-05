import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LandingPage from "../pages/landingPage/landingPage";
import MainPage from "../pages/YC_Liew/PortFolio";
import LandingKY from "../pages/ChokKahYang/landingKY";
import VinLandingPage from "../pages/ChanVinSheng/VinLandingPage";
import Timothy from "../pages/Timothy/timothy";
import TeamPlayer from "../pages/Timothy/teamPlayer";
<<<<<<< HEAD
import DotaPlayer from "../pages/Timothy/dotaPlayer";
import Dota2 from "../pages/YC_Liew/Dota2";
import itemDetails from "../pages/YC_Liew/ItemDetials";
=======
import Dota2 from "../pages/YC_Liew/Dota2";
import itemDetails from "../pages/YC_Liew/ItemDetials"
>>>>>>> e12f5d1b051a202b42787e79d4e1d0330160e686

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
          <Route exact path="/LiewYihChan" component={MainPage} />
          <Route exact path="/ChanVinSheng" component={VinLandingPage} />
          <Route exact path="/kychok/" component={LandingKY} />
          <Route exact path="/team/:id/players" component={TeamPlayer} />
<<<<<<< HEAD
          <Route exact path="/players/:id" component={DotaPlayer} />
          <Route exact path="/Dota2" component={Dota2} />
          <Route path="/Dota2/:id" component={itemDetails} />
=======
          <Route exact path="/kychok/" component={LandingKY}/>
          <Route exact path="/Dota2" component={Dota2}/>
          <Route path ="/Dota2/:id" component={itemDetails}/>
>>>>>>> e12f5d1b051a202b42787e79d4e1d0330160e686
        </Switch>
      </BrowserRouter>
    );
  }
}
