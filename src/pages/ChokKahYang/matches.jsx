import React from "react";
import BasePage from "../basePage/basePage";
import DataFetching from "./DataFetching";

export default class MatchPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <BasePage title={"Matches"}>
                <DataFetching />
            </BasePage>
        );
    }
}
