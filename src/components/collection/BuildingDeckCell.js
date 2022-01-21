import Card from "./../game/Card";

export default function BuildingDeckCell({ card, played, cardClickFunc }) {

  if (card) {
    return (
      <div className="grid-cell">
        <Card card={card} played={played} clickFunc={cardClickFunc} loc="deck" />
      </div>
    );
  }
  return (
    <div className="grid-cell"></div>
  );
} 
