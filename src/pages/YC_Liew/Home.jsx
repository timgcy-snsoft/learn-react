import React from "react";
import BasePage from "../basePage/basePage";

export default class LandingPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <BasePage title={"Home Page"}>
                HomePage
            </BasePage>
        );
    }
}