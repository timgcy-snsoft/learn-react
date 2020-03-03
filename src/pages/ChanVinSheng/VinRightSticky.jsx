import React from "react";
import "./style.scss";

export default class rightSticky extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={`rightSticky`}>
        <a href="mailto:vschan@snsoft.my">vschan@snsoft.my</a>
      </div>
    );
  }
}
