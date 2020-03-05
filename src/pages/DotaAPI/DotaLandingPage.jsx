import React from "react";
import HeroApi from "../DotaAPI/HeroApi";
import ItemApi from "../YC_Liew/Dota2";
export default class DotaApi extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <HeroApi />
        <ItemApi />
      </div>
    );
  }
}
