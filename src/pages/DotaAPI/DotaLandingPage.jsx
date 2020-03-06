import React from "react";
import HeroApi from "../DotaAPI/HeroApi";
import ItemApi from "../YC_Liew/Dota2";
import MatchAPI from "../ChokKahYang/MatchAPI";
import BasePage from "../basePage/basePage";
export default class DotaApi extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BasePage title="Dota 2">
        <BasePage title="Match (KY Chok)">
          <MatchAPI />
        </BasePage>
        <BasePage title="Heroes (Chan Vin Sheng)">
          <HeroApi />
        </BasePage>
        <BasePage title="Items (Liew Yih Chan)">
          <ItemApi />
        </BasePage>
      </BasePage>
    );
  }
}
