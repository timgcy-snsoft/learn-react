import React, { useState, useEffect } from "react";
import "./proteam.scss";
import { Link } from "react-router-dom";

const teamIknow = [
  "OG",
  "TNC Predator",
  "Vici Gaming",
  "Team Secret",
  "Invictus Gaming",
  "Fnatic"
];
export default class proTeam extends React.Component {
  /**
   * constructor
   *
   * @object  @props  parent props
   * @object  @state  component state
   */
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      isLoaded: false
    };
  }

  /**
   * componentDidMount
   *
   * Fetch json array of objects from given url and update state.
   */
  componentDidMount() {
    var teamArr = [];
    fetch("https://api.opendota.com/api/teams")
      .then(res => res.json())
      .then(json => {
        for (const a in json) {
          for (const arr in teamIknow) {
            if (json[a].name.toLowerCase() === teamIknow[arr].toLowerCase()) {
              teamArr.push(json[a]);
            }
          }
        }
        this.setState({
          items: teamArr,
          isLoaded: true
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  /**
   * render
   *
   * Render UI
   */
  render() {
    const { isLoaded, items } = this.state;

    if (!isLoaded) return <div>Loading...</div>;

    return (
      <div className="slideshow">
        <h3>Top Teams</h3>
        <div className="slideshow-container">
          <ul>
            <div className="slideshow-slide">
              {items.map(item => (
                <Link to={`/team/${item.team_id}/players`}>
                  <div className="teamProfile">
                    <li key={item.team_id}>
                      <div className="slideshow-img">
                        <img src={item.logo_url} alt="" />
                      </div>
                      <div className="teamDetail">
                        <div className="teamName">{item.name}</div>
                        <div className="result-container">
                          <div className="result win">Win: {item.wins}</div>
                          <div className="result lose">Lose: {item.losses}</div>
                        </div>
                      </div>
                    </li>
                  </div>
                </Link>
              ))}
            </div>
          </ul>
        </div>
      </div>
    );
  }
}
