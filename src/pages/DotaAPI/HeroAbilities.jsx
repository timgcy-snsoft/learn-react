import React from "react";
import "./HeroApi.scss";

export default class HeroAbilities extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      abilities: [],
      heroName: this.props.heroName,
      isLoaded: false
    };
  }

  componentDidMount() {
    Promise.all([
      fetch("https://api.opendota.com/api/constants/hero_abilities"),
      fetch("https://api.opendota.com/api/constants/abilities")
    ])
      .then(([res1, res2]) => {
        return Promise.all([res1.json(), res2.json()]);
      })
      .then(([res1, res2]) => {
        this.setState({
          items: res1,
          abilities: res2,
          isLoaded: true
        });
      });
  }

  render() {
    const { isLoaded, heroName, items, abilities } = this.state;
    let heroAbilities = [];
    let getHeroAbilities = [];
    if (isLoaded) {
      for (const properties in items[heroName]["abilities"]) {
        heroAbilities.push(items[heroName]["abilities"][properties]);
      }

      const filterAbilities = heroAbilities.filter(
        nullAbilities => nullAbilities !== "generic_hidden"
      );

      filterAbilities.forEach(element =>
        getHeroAbilities.push(abilities[element])
      );

      console.log(getHeroAbilities);
    }

    if (!isLoaded) return <div>Loading...</div>;

    const add = "http://cdn.dota2.com/";

    return (
      <div>
        <ul className={`abilities-list`}>
          {getHeroAbilities.map(abilities => (
            <li key={abilities.dname}>
              <img src={add + abilities.img} />
              <span className="tooltip-text-abilties">{abilities.dname}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
