import React from "react";
import BasePage from "../basePage/basePage";
import MatchAPI from "./MatchAPI";

export default class LandingDota extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <BasePage title={"Matches"}>
                <MatchAPI />
            </BasePage>
        );
    }
}
