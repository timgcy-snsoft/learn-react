import React from "react";
import EduList from "./EduList"
import Profile from "./profile.jpg"
import "./ky.scss"
import { useForm } from 'react-hook-form'

export default class LandingKY extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            personal: {
                name: 'KY',
                age: '21',
                from: 'Negeri Sembilan',
                occupation: 'Trainee Backend Developer'
            },
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
            },
            tempName: '',
            tempAge: '',
            tempFrom: '',
            tempOccup: '',
            formView: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleName = this.handleName.bind(this)
    }


    handleSubmit(event) {
        this.setState({
            personal: {
                name: this.state.tempName ? this.state.tempName : this.state.personal.name,
                age: this.state.tempAge ? this.state.tempAge : this.state.personal.age,
                from: this.state.tempFrom ? this.state.tempFrom : this.state.personal.from,
                occupation: this.state.tempOccup ? this.state.tempOccup : this.state.personal.occupation
            }
        })
        event.preventDefault();
        this.setState({ tempName: "" })
        this.setState({ tempAge: "" })
        this.setState({ tempFrom: "" })
        this.setState({ tempOccup: "" })
        this.setState({ formView: false })
    }

    handleName(e) {
        this.setState({ tempName: e.target.value });
    }


    render() {


        return (
            <div className={`base-page silk text-white`}>
                <div className="flex">

                    <div className={`m-3 border p-3`} style={{ display: this.state.formView ? 'block' : 'none' }}>
                        <h1>Form: </h1>
                        <form className="d-flex flex-column p-2" onSubmit={this.handleSubmit}>
                            <div className="p-2">
                                <span className="font-weight-bold">Name: </span>
                                <input className="w-100" name="name"
                                    placeholder='Chok Kah Yang (KY)'
                                    value={this.state.tempName}
                                    onChange={(e) => this.setState({ tempName: e.target.value })} />
                            </div>
                            <div className="p-2">
                                <span className="font-weight-bold">Age: </span>
                                <input className="w-100" name="age"
                                    placeholder="21"
                                    value={this.state.tempAge}
                                    onChange={(e) => this.setState({ tempAge: e.target.value })} />

                            </div>
                            <div className="p-2">
                                <span className="font-weight-bold">From: </span>
                                <input className="w-100" name="from"
                                    placeholder="Negeri Sembilan"
                                    value={this.state.tempFrom}
                                    onChange={(e) => this.setState({ tempFrom: e.target.value })} />
                            </div>
                            <div className="p-2">
                                <span className="font-weight-bold">Occupation: </span>
                                <input className="w-100" name="occupation"
                                    placeholder="Trainee Backend Developer"
                                    value={this.state.tempOccup}
                                    onChange={(e) => this.setState({ tempOccup: e.target.value })} />
                            </div>
                            <input className="btn btn-dark mt-1" type="submit" />
                        </form >
                    </div>

                    <div className={"base-page-header"}>
                        <h1 className="font-weight-bold page-title">
                            {this.state.personal.name !== '' ? this.state.personal.name : "Anonymous"}
                            {this.state.personal.age !== '' &&
                                <span>, {this.state.personal.age}</span>}
                        </h1>
                        {this.state.personal.from !== '' &&
                            <h3 className="font-weight-bold page-title">From {this.state.personal.from}</h3>}
                        {this.state.personal.occupation !== '' &&
                            <div className="h5 text-white-50">
                                <p>Hi, I am a {this.state.personal.occupation} <br />
                                    in <strong className="h3 text-white">SNSoft Sdn Bhd</strong>. <br />
                                </p>
                            </div>}
                    </div>
                    <img src={Profile} alt="Profile" className="profileImg ml-5" />
                </div>
                <button className="btn btn-dark mt-1"
                    style={{ display: this.state.formView ? "none" : "block" }}
                    onClick={() => this.setState({ formView: true })}>
                    Edit</button>
                <button className="btn btn-dark mt-1"
                    style={{ display: this.state.formView ? "block" : "none" }}
                    onClick={() => this.setState({ formView: false })}>
                    Back</button>
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
