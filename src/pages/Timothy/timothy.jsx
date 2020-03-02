/*
 My code starts here
*/
import React from "react";
import BasePage from "../basePage/basePage";

export default class LandingPage extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //     };
  //   }

  render() {
    const timothy = {
      name: "Timothy Goh",
      gender: "male",
      age: 22,
      occupation: "developer",
      hobby: "photography"
    };
    const { name, gender, age, occupation, hobby } = timothy;
    return (
      <BasePage title={"Timothy Goh"}>
        Hi, I am {name}.<br />A {gender} obviously. I'm a 90's and now I'm {age}
        , working as a {occupation}.
        <br />
        I'm a {hobby} lover.
      </BasePage>
    );
  }
}
