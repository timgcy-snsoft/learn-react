import React, { useState, useEffect } from 'react';
import './Dota2.scss';

function itemDetails({ match }) {
  useEffect(() => {
    fetchItem();
  }, []);

  const [item, setItem] = useState([]);
  const [cd, setCd] = useState(true);

  const fetchItem = async () => {
    const data = await fetch(
      'https://api.opendota.com/api/constants/items'
    );
    const object = await data.json();
    for (const property in object) {
      if (property === match.params.id) {
        setItem((preItem) => {
          return [
            ...preItem,
            {
              text: `${property}`,
              dname: `${object[property].dname}`,
              key: `${object[property].id}`,
              img: "http://cdn.dota2.com/" + `${object[property].img}`,
              cost: `${object[property].cost}`,
              lore: `${object[property].lore}`,
              notes: `${object[property].notes}`,
              CD: `${object[property].cd}`
            }
          ]
        });
        console.log(object[property].cd)
        if(object[property].cd == false)
        {
          setCd(false);
      }
      }
    }
  }

  console.log(item, 'item')

  return (
    <div className="Details-Main">
      {item.map(item => (
        <div className="Details-div" key={item.key}>
          <div>
            <div className="Details-div-img">
              <img className="Details-img" src={item.img} alt={item.key} title={item.text}></img>
            </div>
            <div className="Details-content">
              <table className="Details-table">
                <tbody>
                <tr>
                  <td className="Details-table-td1 Details-table-name">Name</td>
                  <td className="Details-table-name">{item.dname}</td>
                </tr>
                <tr>
                  <td className="Details-table-td1 Details-table-cost">Cost</td>
                  <td className="Details-table-cost">{item.cost}</td>
                </tr>
                <tr>
                  <td className="Details-table-td1 Details-table-desc">Desciption</td>
                  <td className="Details-table-desc2">{item.lore}</td>
                </tr>
                <tr>
                  <td className="Details-table-td1">CD</td>
                  <td className={cd? 'Details-table-cd-true':'Details-table-cd-false'}>{item.CD}</td>
                </tr>
                </tbody>
              </table>
              <div className="Details-content-cd">
                <span></span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default itemDetails;