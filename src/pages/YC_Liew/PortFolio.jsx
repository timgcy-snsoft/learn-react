import React from "react";
import BasePage from "../basePage/basePage";
import "./PortFolio.scss"
import Profile from "./personalPicture.jpg"

export default class LandingPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <BasePage title={"Liew Yih Chan"}>
                </BasePage>
                <div className="content">
                    <img src={Profile} className="picture"></img>
                    <div className="header">SNSoft Developer</div>
                    <div className="MainContent">
                        <div>Name : Liew Yih Chan</div>
                        <div>Age : 22 years old</div>
                        <div>Gender : Male</div>
                        <div>Location : No.39 , Jalan Teratai 2/2 , Taman Bukit Teratai , Selangor</div>
                        <div>Contact Number : 017-2112912</div>
                        <div>Strength Coding : C# , Java</div>
                    </div>
                    <div className="About">About Me</div>
                    <p className="paragrah">
                        I am study in TARUC (Tunku Abdul Rahman College) bachelor degree in Software Developer. I have learn before C# , Java , SQL , html & css and soon. I am a student who are enjoy to design a web and coding. My hobby is swimming.
                    </p>
                </div>
            </>
        );
    }
}
