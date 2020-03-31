import React from "react";
import HeroApi from "../DotaAPI/HeroApi";
import ItemApi from "../YC_Liew/Dota2";
import MatchAPI from "../ChokKahYang/MatchAPI";
import BasePage from "../basePage/basePage";
import DotaTeam from "../Timothy/proteams";
<<<<<<< HEAD
import callApi from "../DotaAPI/FetchFunction"
=======
import callApi from "../DotaAPI/FetchFunction";
>>>>>>> 2af877e4413eb20d6431437a1abe85cda32af12e
export default class DotaApi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
<<<<<<< HEAD
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
=======
      publicMatches: [],
      heroStats: [],
      clusters: [],
      items: [],
      itemsID: [],
      isLoaded: false
    };
  }


  async componentDidMount() {
    this.setState({
      publicMatches: await callApi('/publicMatches'),
      heroStats: await callApi('/heroStats'),
      clusters: await callApi('/constants/cluster'),
      items: await callApi('/constants/items'),
      itemsID: await callApi(`/constants/item_ids`),
      isLoaded: true
    });
  }

  render() {
    const { isLoaded, publicMatches, heroStats, clusters, items, itemsID } = this.state
    if (!isLoaded) return <div>Loading...</div>

    return (
      <BasePage title="Dota 2">
        <h2 className="ml-5 mt-2 text-white font-weight-bold"> Match (KY Chok)</h2>
        <MatchAPI publicMatches={publicMatches} heros={heroStats} clusters={clusters}
          items={items} itemsID={itemsID} />
        <h2 className="ml-5 mt-2 text-white font-weight-bold"> Heroes (Chan Vin Sheng)</h2>
        <HeroApi items={heroStats} />
        <h2 className="ml-5 mt-2 text-white font-weight-bold"> Items (Liew Yih Chan)</h2>
        <ItemApi />
        <h2 className="ml-5 mt-2 text-white font-weight-bold"> Teams (Tim)</h2>
>>>>>>> 2af877e4413eb20d6431437a1abe85cda32af12e
        <DotaTeam />
      </BasePage>
    );
  }
}
