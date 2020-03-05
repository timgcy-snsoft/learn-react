import React from "react";
import HeroApi from "../DotaAPI/HeroApi";

export default class DotaApi extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <HeroApi />
      </div>
    );
  }
}
