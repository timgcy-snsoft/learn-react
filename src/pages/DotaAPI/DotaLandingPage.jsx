import React from "react";
import HeroApi from "../DotaAPI/HeroApi";
import ItemApi from "../YC_Liew/Dota2";
import MatchAPI from "../ChokKahYang/MatchAPI";
import BasePage from "../basePage/basePage";
import DotaTeam from "../Timothy/proteams";
export default class DotaApi extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BasePage title="Dota 2">
        <h2 className="ml-5 mt-2 text-white font-weight-bold"> Match (KY Chok)</h2>
        <MatchAPI />
        <h2 className="ml-5 mt-2 text-white font-weight-bold"> Heroes (Chan Vin Sheng)</h2>
        <HeroApi />
        <h2 className="ml-5 mt-2 text-white font-weight-bold"> Items (Liew Yih Chan)</h2>
        <ItemApi />
        <h2 className="ml-5 mt-2 text-white font-weight-bold"> Teams (Tim)</h2>
        <DotaTeam />
      </BasePage>
    );
  }
}
