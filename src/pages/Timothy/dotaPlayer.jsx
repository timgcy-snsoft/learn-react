import React from 'react'
import './dotaPlayer.scss'
import callApi from '../DotaAPI/FetchFunction'

export default class DotaPlayer extends React.Component {
  /**
   * constructor
   *
   * @object  @props  parent props
   * @object  @state  component state
   */
  constructor(props) {
    super(props)

    this.state = {
      pid: this.props.match.params.id,
      player: [],
      match: false,
    }
  }

  /**
   * componentDidMount
   *
   * Fetch json array of objects from given url and update state.
   */
  // componentDidMount() {
  //   fetch(`https://api.opendota.com/api/players/${this.state.pid}`)
  //     .then(res => res.json())
  //     .then(data => {
  //       this.setState({
  //         player: data,
  //         isLoaded: true
  //       });
  //       console.log(data);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // }

  async componentDidMount() {
    this.setStata({
      player: await callApi(`/players/${this.state.pid}`),
      isLoaded: true,
    })
  }

  /**
   * render
   *
   * Render UI
   */
  render() {
    const { isLoaded, player } = this.state

    if (!isLoaded) return <div>Loading...</div>

    return (
      <div className="player">
        <img src={player.profile.avatarfull} alt="" />
        <h3 className="player-nname">{player.profile.name}</h3>
        <h5 className="player-name">{player.profile.personaname}</h5>
        <div className="player-rank">
          <div>
            Rank Tier: <span>{player.ranktier ? player.ranktier : 'N/A'}</span>
          </div>
          <div>
            Solo Rank:
            <span>
              {player.solo_competitive_rank
                ? player.solo_competitive_rank
                : 'N/A'}
            </span>
          </div>
          <div>
            MMR:
            <span>
              {player.mmr_estimate.estimate
                ? player.mmr_estimate.estimate
                : 'N/A'}
            </span>
          </div>
        </div>
        <p className="steam">
          <a href={player.profile.profileurl ? player.profile.profileurl : '#'}>
            View Steam Profile
          </a>
        </p>
      </div>
    )
  }
}
