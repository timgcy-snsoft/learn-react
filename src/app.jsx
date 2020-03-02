import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import Routes from "./routes/routes";
import TopBar from "./components/topBar";

export default class App extends React.Component {
    render() {
        return (
            <div id={"app"}>
                <TopBar/>
                <Routes/>
            </div>
        );
    }
}
