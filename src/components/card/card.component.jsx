import { Component } from "react";
import "./card.style.css";

class Card extends Component {
  render() {
    const { monsterList } = this.props;
    return (
      <div className="card-container" key={monsterList.id}>
        <img
          className="image"
          src={`https://robohash.org/${monsterList.id}`}
          alt={`monster${monsterList.name}`}
        />
        <h1 className="monster-text" key={monsterList.id}>
          {monsterList.name}
        </h1>
        <p className="email-text">{`Email: ${monsterList.email}`}</p>
      </div>
    );
  }
}

export default Card;
