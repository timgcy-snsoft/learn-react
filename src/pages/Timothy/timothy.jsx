import React from "react";
import BasePage from "../basePage/basePage";
import "./timothy.scss";

// const inputParsers = {
//   uppercase(input) {
//     return input.toUpperCase();
//   },
//   number(input) {
//     return parseInt(input);
//   }
// };

function stringifyFormData(fd) {
  const data = {};
  for (let key of fd.keys()) {
    data[key] = fd.get(key);
  }
  return JSON.stringify(data, null, 2);
}
export default class Timothy extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {};
  }

  handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);

    this.setState({
      res: stringifyFormData(data)
    });
  }

  render() {
    // const { name, age, place, occupation } = this.state;

    return (
      <BasePage>
        <div className="container box">
          <div className={"card-layout"}>
            <div className="user-input-field">
              <form onSubmit={this.handleSubmit}>
                <table>
                  <tbody>
                    <tr>
                      <th>Name</th>
                      <td>
                        <input type="text" name="name" id="name" />
                      </td>
                    </tr>
                    <tr>
                      <th>Age</th>
                      <td>
                        <input type="number" name="age" id="age" />
                      </td>
                    </tr>
                    <tr>
                      <th>Birth place</th>
                      <td>
                        <input type="text" name="place" id="place" />
                      </td>
                    </tr>
                    <tr>
                      <th>Occupation</th>
                      <td>
                        <input type="text" name="occupation" id="occupation" />
                      </td>
                    </tr>
                  </tbody>
                </table>
                <button type="submit">Save</button>
              </form>
            </div>

            {() =>
              this.state.res && (
                <div className={"desc-panel"}>
                  <h6>Hi, I am</h6>
                  <h3>{name}</h3>
                  <h4>{occupation}</h4>
                  <p>{age}</p>
                  <p>{place}</p>
                  <pre>FormData {this.state.res}</pre>
                </div>
              )
            }

            {this.state.res && (
              <div className="res-block">
                <h3>Data to be sent:</h3>
                <pre>FormData {this.state.res}</pre>
              </div>
            )}
          </div>
        </div>
      </BasePage>
    );
  }
}
