import React from "react";
import "./teamPlayer.scss";

export default class TeamPlayer extends React.Component {
  /**
   * constructor
   *
   * @object  @props  parent props
   * @object  @state  component state
   */
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      team: [],
      match: false
    };
  }

  /**
   * componentDidMount
   *
   * Fetch json array of objects from given url and update state.
   */
  componentDidMount() {
    fetch(`https://api.opendota.com/api/teams/${this.state.id}/players`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          id: this.props.match.params.id,
          team: data,
          isLoaded: true
        });
        // console.log(data);
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
    const { id, isLoaded, team } = this.state;
    const imgUrl =
      "https://true-education.org/wp-content/uploads/2015/10/facebook-profile-picture-unknown-facts-about-facebook.jpg";

    const winRate = (wins, games) => {
      var rate = (parseInt(wins) / parseInt(games)) * 100;
      return rate.toFixed(2);
    };

    if (!isLoaded) return <div>Loading...</div>;

    return (
      <div className="team">
        <h3>Team Players</h3>
        <div className="team-container">
          <ul>
            <div>
              {team.map(player => (
                <li key={player.account_id}>
                  <figure className="card card--normal player-profile">
                    <div className="profile-pic card__image-container">
                      <img src={imgUrl} alt="" className="card__image" />
                    </div>

                    <figcaption className="card__caption">
                      <h3 className="teamName card__name">
                        {player.name ? player.name : "no name"}
                      </h3>

                      <table className="card__stats">
                        <tbody>
                          <tr>
                            <th>Wins</th>
                            <td>{player.wins}</td>
                          </tr>

                          <tr>
                            <th>Total Games</th>
                            <td>{player.games_played}</td>
                          </tr>

                          <tr>
                            <th>Win Rate</th>
                            <td>
                              {winRate(player.wins, player.games_played)} %
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </figcaption>
                  </figure>
                </li>
              ))}
            </div>
          </ul>
        </div>
      </div>
    );
  }
}
