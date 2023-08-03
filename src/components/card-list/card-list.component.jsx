import { Component } from "react";
import "./card-list.style.css";

class CardList extends Component {
  render() {
    const { monsters } = this.props;
    return (
      <div>
        {monsters.map((monster) => {
          return (
            <h1 className="monster-text" key={monster.id}>
              {monster.name}
            </h1>
          );
        })}
      </div>
    );
  }
}

export default CardList;
