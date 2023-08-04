import "./card-list.style.css";

import Card from "../card/card.component";

const CardList = ({ monsters }) => {
  return (
    <div className="content">
      <div className="card-list">
        {monsters.map((monster) => {
          return <Card key={monster.id} monsterList={monster} />;
        })}
      </div>
    </div>
  );
};

export default CardList;
