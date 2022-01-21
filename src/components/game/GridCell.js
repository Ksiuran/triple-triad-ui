import Card from "./Card";

export default function GridCell({ card, played, clickFunc, id, loc, cardClass }) {

  if (card) {
    return (
        <div className="grid-cell">
          <Card card={card} played={played} clickFunc={clickFunc} loc={loc} cardClass={cardClass} />
        </div>
    );
  } else if (loc) {
    return (
      <div className="grid-cell"></div>
    );
  }
  return (
    <a href="#">
      <div className="grid-cell" onClick={() => clickFunc(card, loc)}></div>
    </a>
  );
} 
