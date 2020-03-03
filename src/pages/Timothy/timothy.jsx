/*
 My code starts here
*/
import React from "react";
import BasePage from "../basePage/basePage";
import "./timothy.scss";

export default class Timothy extends React.Component {
  render() {
    const timothy = {
      name: "Timothy Goh",
      age: 22,
      occupation: "developer",
      hobby: "photography",
      msg:
        "Why I choose to be a developer? I feel this kind of occupation is intruiging. All I need to do is to just deal with the problem I faced and fix it.",
      birthday: "6th May 1998",
      email: "timothygoh@snsoft.my",
      contact: "+60 16 - 576 9856"
    };
    const {
      name,
      age,
      occupation,
      hobby,
      msg,
      birthday,
      email,
      contact
    } = timothy;
    return (
      <BasePage>
        <div className={"container box"}>
          <div className={"card-layout"}>
            <div className={"media img-panel"}>
              <img
                src="https://pbs.twimg.com/profile_images/1150311201668157441/XMMLZugM_400x400.png"
                alt="profile-pic"
              />
            </div>
            <div className={"desc-panel"}>
              <h6>Hi, I am</h6>
              <h3>{name}</h3>
              <h4>Junior Developer</h4>
              <p>
                I'm a 90's and now I'm {age}, workingas a {occupation}.<br />
                I'm a {hobby} lover.
              </p>
              <p>{msg}</p>
              <ul className={"basic-info"}>
                <li>BD: {birthday}</li>
                <li>Tel: {contact}</li>
                <li>
                  Email: <a href="mailto:timothygoh@snsoft.my">{email}</a>
                </li>
              </ul>

              <ul className={"social-site"}>
                <li>
                  <a href="https://www.facebook.com/timothygcy">Facebook</a>
                </li>
                <li>
                  <a href="https://instagram.com/bleckshiba_film?igshid=hdqy5jnas534">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/timothy_gcy">Twitter</a>
                </li>
                <li>
                  <a href="https://my.linkedin.com/in/timothy-goh-4269ba164">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </BasePage>
    );
  }
}
