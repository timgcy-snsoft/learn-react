import React from "react";
import HeroApi from "../DotaAPI/HeroApi";
import ItemApi from "../YC_Liew/Dota2";
import MatchAPI from "../ChokKahYang/MatchAPI";
import BasePage from "../basePage/basePage";
import DotaTeam from "../Timothy/proteams";
import callApi from "../DotaAPI/FetchFunction";
export default class DotaApi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false
    };
  }

  async componentDidMount() {
    this.setState({
      items: await callApi("/heroStats"),
      isLoaded: true
    });
  }

  render() {
    const { isLoaded, items } = this.state;
    if (!isLoaded) return <div>Loading...</div>;
    return (
      <BasePage title="Dota 2">
        <h2 className="ml-5 mt-2 text-white font-weight-bold">
          {" "}
          Match (KY Chok)
        </h2>
        <MatchAPI />
        <h2 className="ml-5 mt-2 text-white font-weight-bold">
          {" "}
          Heroes (Chan Vin Sheng)
        </h2>
        <HeroApi items={items} />
        <h2 className="ml-5 mt-2 text-white font-weight-bold">
          {" "}
          Items (Liew Yih Chan)
        </h2>
        <ItemApi />
        <h2 className="ml-5 mt-2 text-white font-weight-bold"> Teams (Tim)</h2>
        <DotaTeam />
      </BasePage>
    );
  }
}
