import React from "react";
import BaseKY from "./baseKY";

export default class LandingKY extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "KY Chok"

        };

    }

    render() {
        return (
            <BaseKY title={"Chok Kah Yang (KY)"}>
                <div className="h5 text-white-50">
                    <p>Hi, KY here, Trainee Backend Developer <br />
                        in <strong className="h3 text-white">SNSoft Sdn Bhd</strong>. <br />
                    </p>
                </div>
            </BaseKY>
        );
    }
}
