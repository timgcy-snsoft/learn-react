import React from "react";
import EduList from "./EduList"
import Profile from "./profile.jpg"
import "./ky.scss"

export default class LandingKY extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            degree: {
                school: "Tunku Abdul Rahman University College",
                qualified: "Degree in Software Engineering",
                yearStart: 2018,
                yearEnd: 2020
            },
            diploma: {
                school: "Tunku Abdul Rahman University College",
                qualified: "Diploma in Computer Science & Computer Mathematics",
                yearStart: 2016,
                yearEnd: 2018
            },
            secondary: {
                school: "SMK Raja Jumaat",
                qualified: "Sijil Pelajaran Malaysia (SPM)",
                yearStart: 2010,
                yearEnd: 2015
            }
        };

    }

    render() {
        return (

            <div className={`base-page silk text-white`}>
                <div className="flex">

                    <div className={"base-page-header"}>
                        <h1 className="font-weight-bold page-title">Chok Kah Yang (KY)</h1>
                        <div className="h5 text-white-50">
                            <p>Hi, KY here, Trainee Backend Developer <br />
                                in <strong className="h3 text-white">SNSoft Sdn Bhd</strong>. <br />
                            </p>
                        </div>

                    </div>
                    <img src={Profile} alt="Profile" className="profileImg ml-5" />
                </div>
                <div className="glass">
                    <EduList qualification={this.state.degree} ></EduList>
                    <EduList qualification={this.state.diploma}></EduList>
                    <EduList qualification={this.state.secondary}></EduList>
                </div>

                <div className="h3 ml-4 contact">Contact</div>
                <div className="glass">
                    <div className="h5 p-4">
                        <p>Phone: 018-3188991 </p>
                        <p>Email: kychok@snsoft.my</p>
                        <p>LinkedIn: <a className="text-decoration-none text-white btn btn-outline-dark p-1.5"
                            href="https://www.linkedin.com/in/kah-yang-chok-3bb526190/">KY Chok</a> </p>

                    </div>
                </div>
            </div>


        );
    }
}
