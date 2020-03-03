import React from "react";

export default class HeroApi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false
    };
  }

  componentDidMount() {
    fetch("https://api.opendota.com/api/heroStats")
      .then(res => res.json())
      .then(json => {
        this.setState({
          items: json,
          isLoaded: true
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const { isLoaded, items } = this.state;

    if (!isLoaded) return <div>Loading...</div>;

    return (
      <div>
        <ul>
          {items.map(item => (
            <li>Name: {item.localized_name} | </li>
          ))}
        </ul>
      </div>
    );
  }
}
