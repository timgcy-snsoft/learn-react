import React from "react";
import "./style.scss";

export default class VinBodyContent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { info } = this.props;
    const items = ["Html", "Javascript", "CSS", "Java", "PHP", "C"];
    return (
      <div className={`container bodyContent`}>
        <h3>About Me</h3>
        <div className={`about-content`}>
          <div className={`about-text`}>
            <p>
              Hello! I'm {info.name}, a {info.occupation} based in Kuala Lumpur,
              who enjoys coding. I am {info.age} , {info.gender}, i current
              undergoing my internship which will last for 6 month
            </p>
            <p>
              i will soon graduate from{" "}
              <a href="https://www.tarc.edu.my/">
                Tunku Abdul Rahman University College
              </a>{" "}
              with the Bachelor of Information Technology (Honours) in Software
              Systems Development
            </p>
            <p>Here is some of my basic skill </p>
            <ul className={`skillList`}>
              {items.map(item => (
                <li>{item}</li>
              ))}
            </ul>
          </div>
          <div className={`about-image`}>
            <a>
              <img
                src={
                  "https://web.tarc.edu.my/portal/getStuPhoto.jsp?fkey=1808274"
                }
              />
            </a>
          </div>
        </div>
      </div>
    );
  }
}
