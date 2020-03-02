import React from "react";
import "./style.scss";

export default class VinHeaderContent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { info } = this.props;
    return (
      <div className={`container`}>
        <p>Hi, my name is </p>
        <h1 className={`textName`}>{info.name}</h1>
        <h2 className={`textJob`}>I am a Internship Student.</h2>
        <div className={`introduce-container`}>
          <p>
            I am currently doing my internship at SNSoft, located in Kuala
            Lumpur. My training will last for 6 month.
          </p>
        </div>
        <div className={`introduce-button`}>
          <a href="mailto:vschan@snsoft.my">Get In Touch</a>
        </div>
      </div>
    );
  }
}
