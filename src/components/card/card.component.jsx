import "./card.style.css";

const Card = ({ monsterList }) => {
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
};

export default Card;
