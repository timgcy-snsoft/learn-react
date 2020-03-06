import React from "react";

export default class EduList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        const { school, qualified, yearStart, yearEnd } = this.props.qualification

        return (
            <div className="container-edu">
                <h3 className="font-weight-bold">{school}</h3>
                <div className="text-white-70 h4">{qualified}</div>
                <div className="text-white-50 h6">{yearStart} - {yearEnd}</div>
                <div className=""></div>
            </div>
        );
    }
}
