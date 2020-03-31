import React from "react";
import HeroApi from "../DotaAPI/HeroApi";
import ItemApi from "../YC_Liew/Dota2";
import MatchAPI from "../ChokKahYang/MatchAPI";
import BasePage from "../basePage/basePage";
import DotaTeam from "../Timothy/proteams";
import callApi from "../DotaAPI/FetchFunction"
export default class DotaApi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemss: [],
      isLoad: false
    }
  }

  async componentDidMount() {
    this.setState({
      itemss: await callApi("/constants/items"),
      isLoad :true
    })
  }

  render() {
    const {isLoad , itemss} = this.state
    if(!isLoad) return <div>Loading...</div>
    return (
      <BasePage title="Dota 2">
        <h2 className="ml-5 mt-2 text-white font-weight-bold">{" "} Match (KY Chok)</h2>
        <MatchAPI />
        <h2 className="ml-5 mt-2 text-white font-weight-bold">{" "}  Heroes (Chan Vin Sheng)</h2>
        <HeroApi />
        <h2 className="ml-5 mt-2 text-white font-weight-bold">{" "}  Items (Liew Yih Chan)</h2>
        <ItemApi itemss={itemss}/>
        <h2 className="ml-5 mt-2 text-white font-weight-bold">{" "}  Teams (Tim)</h2>
        <DotaTeam />
      </BasePage>
    );
  }
}
