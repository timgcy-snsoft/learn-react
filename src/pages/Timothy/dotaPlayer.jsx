import React from "react";
import "./dotaPlayer.scss";
import BasePage from "../basePage/basePage";

export default class DotaPlayer extends React.Component {
  /**
   * constructor
   *
   * @object  @props  parent props
   * @object  @state  component state
   */
  constructor(props) {
    super(props);

    this.state = {
      pid: this.props.match.params.id,
      player: [],
      match: false
    };
  }

  /**
   * componentDidMount
   *
   * Fetch json array of objects from given url and update state.
   */
  componentDidMount() {
    fetch(`https://api.opendota.com/api/players/${this.state.pid}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          pid: this.props.match.params.id,
          player: data,
          isLoaded: true
        });
        console.log(data);
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
    const { id, isLoaded, player } = this.state;
    const user = player;

    if (!isLoaded) return <div>Loading...</div>;

    return (
      <div className="player">
        <h3>{user.profile.personaname}</h3>
        <div className="player-container">
          <div className="player-avatar">
            <img src={user.profile.avatarfull} alt="" />
          </div>
        </div>
      </div>
    );
  }
}
