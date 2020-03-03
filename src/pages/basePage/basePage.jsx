import React from "react";
import "./basePage.scss";

export default class BasePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, children } = this.props;

    return (
      <div className={`base-page`}>
        <div className={"base-page-header"}>
          {title && <h1 className="page-title">{title}</h1>}
          <h1>Test</h1>
        </div>
        {children}
      </div>
    );
  }
}
