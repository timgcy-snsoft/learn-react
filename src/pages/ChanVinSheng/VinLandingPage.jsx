import React from "react";
import VinHeaderContent from "./VinHeaderContent";
import VinBodyContent from "./VinBodyContent";
import VinRightSticky from "./VinRightSticky";

export default class VinLandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "ChanVinSheng",
      age: "23 year old",
      gender: "Male",
      occupation: "software developer",
      hobby: ""
    };
  }

  render() {
    return (
      <div className={`content`}>
        <VinRightSticky />
        <VinHeaderContent info={this.state} />
        <VinBodyContent info={this.state} />
      </div>
    );
  }
}
